import { useEffect, useRef, useState } from 'react';

import { ButtonBase, Grid } from '@mui/material';

import AppDialog from '@features/ui/AppDialog';
import { useBreakpoints } from '@hooks/useBreakpoints';
import useToast from '@hooks/useToast';
import { useStorage } from '@services/firebase';

import { ACCEPTED_PHOTO_FORMATS } from '../costants';
import { TRIP_PREVIEW_IMAGES } from '../data';
import type { PreviewImage, Trip } from '../types';
import PhotoCard from './Files/PhotoCard';
import UploadFileButton from './Files/UploadFileButton';

interface Props {
  defaultPreviewImage: PreviewImage | null;
  defaultPreviewImageSrc?: string | null;
  isOpen: boolean;
  close: () => void;
  onSave: (previewImage: Trip['previewImage']) => void;
  // Will be called in case of uploaded file removal
  onChange?: (previewImage: Trip['previewImage']) => void;
}

export default function PreviewImageDialog({
  isOpen,
  close,
  onSave,
  onChange,
  defaultPreviewImage,
  defaultPreviewImageSrc,
}: Props) {
  const { md } = useBreakpoints();
  const { showErrorMessage } = useToast();

  const {
    uploadFiles,
    uploadProgresses,
    removeFile,
    isLoading,
    removingFilePath,
    uploadErrors,
    resetUpload,
  } = useStorage({
    onAllUploadSuccess: (uploadedFiles) => {
      if (uploadedFiles?.[0].storagePath) {
        onSave({ storagePath: uploadedFiles[0].storagePath });
      }
    },
  });

  const customImageFileRef = useRef<HTMLInputElement | null>(null);

  const [customImageFile, setCustomImageFile] = useState<File | null>();
  const [customPreviewImageSrc, setCustomPreviewImageSrc] = useState<
    string | null | undefined
  >(defaultPreviewImageSrc);
  const [selectedPreviewImage, setSelectedPreviewImage] =
    useState<Trip['previewImage']>(defaultPreviewImage);

  const onTemplateImageClick = (imageId: string) => {
    if (!isLoading && !removingFilePath) {
      setSelectedPreviewImage({ templateImageId: imageId });
    }
  };

  const onCancel = () => {
    setSelectedPreviewImage(defaultPreviewImage);
    close();
  };

  const onSaveClick = async () => {
    if (!selectedPreviewImage) {
      showErrorMessage('Please select a preview image!');
      return;
    }

    if (
      selectedPreviewImage.url &&
      !selectedPreviewImage?.storagePath &&
      customImageFile
    ) {
      uploadFiles('preview-images', [
        { fileName: customImageFile.name, file: customImageFile },
      ]);
    } else if (
      selectedPreviewImage.templateImageId &&
      defaultPreviewImage?.storagePath
    ) {
      await removeFile(defaultPreviewImage?.storagePath);
      onSave(selectedPreviewImage);
    } else {
      onSave(selectedPreviewImage);
    }
  };

  // Custom Image Modifications
  const onCustomImageUploadClick = () => {
    customImageFileRef.current?.click();
  };

  const onCustomImageRemove = async () => {
    const newSelectedPreviewImage = {
      templateImageId: TRIP_PREVIEW_IMAGES[TRIP_PREVIEW_IMAGES.length - 1].id,
    };
    setSelectedPreviewImage(newSelectedPreviewImage);

    if (defaultPreviewImage?.storagePath) {
      await removeFile(defaultPreviewImage?.storagePath);
      onChange?.(newSelectedPreviewImage);
      setCustomPreviewImageSrc(null);
    } else {
      setCustomImageFile(null);
    }
  };

  const onCustomImageFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const imageFile = event.target?.files?.[0];
    if (imageFile) {
      setCustomImageFile(imageFile);
      setSelectedPreviewImage({
        url: URL.createObjectURL(imageFile),
      });
    }
  };

  const selectCustomPreviewImage = () => {
    if (customImageFile) {
      setSelectedPreviewImage({
        url: URL.createObjectURL(customImageFile),
      });
    } else if (defaultPreviewImage?.storagePath) {
      setSelectedPreviewImage(defaultPreviewImage);
    }
  };

  // File upload errors displaying
  useEffect(() => {
    if (uploadErrors[0]) {
      showErrorMessage(uploadErrors[0]);
      resetUpload();
    }
  }, [uploadErrors]);

  return (
    <AppDialog
      title="Select your preview image"
      primaryButtonText="Save"
      isOpen={isOpen}
      onClose={onCancel}
      onPrimaryButtonClick={onSaveClick}
      isLoading={isLoading}
    >
      <Grid container spacing={{ xs: 0.5, md: 1.5 }} columns={{ xs: 2, md: 3 }}>
        {TRIP_PREVIEW_IMAGES.map((image) => (
          <Grid item xs={1} key={image.id}>
            <ButtonBase
              sx={{
                borderRadius: 4,
                border: 4,
                borderColor:
                  selectedPreviewImage?.templateImageId === image.id
                    ? 'primary.main'
                    : 'white',
                overflow: 'hidden',
              }}
              onClick={() => onTemplateImageClick(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{ width: '100%' }}
              />
            </ButtonBase>
          </Grid>
        ))}
        <Grid item xs={1}>
          {customImageFile ||
          (defaultPreviewImage?.storagePath && customPreviewImageSrc) ? (
            <PhotoCard
              src={
                customImageFile
                  ? URL.createObjectURL(customImageFile)
                  : customPreviewImageSrc
              }
              isRemoving={Boolean(removingFilePath)}
              onRemoveClick={onCustomImageRemove}
              uploadProgress={uploadProgresses[0]}
              onClick={selectCustomPreviewImage}
              enableBorders
              borderColor={
                selectedPreviewImage?.url || selectedPreviewImage?.storagePath
                  ? 'primary.main'
                  : 'white'
              }
            />
          ) : (
            <>
              <UploadFileButton
                mainText="Upload preview photo"
                subText="PNG or PDF (max.3MB)"
                sx={{ border: 4, borderColor: 'white' }}
                showSubtext={md}
                onClick={onCustomImageUploadClick}
              />
              <input
                ref={customImageFileRef}
                type="file"
                id="fileInput"
                hidden
                accept={ACCEPTED_PHOTO_FORMATS}
                onChange={onCustomImageFileInputChange}
              />
            </>
          )}
        </Grid>
      </Grid>
    </AppDialog>
  );
}
