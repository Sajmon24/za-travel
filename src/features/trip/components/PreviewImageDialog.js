import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ButtonBase, Grid } from '@mui/material';
import AppDialog from '@features/ui/AppDialog';
import { TRIP_PREVIEW_IMAGES } from '../data';
import UploadFileButton from './UploadFileButton';
export default function PreviewImageDialog({ isOpen, close, onSave }) {
    const [selectedPreviewImage, setSelectedPreviewImage] = useState(null);
    const onSaveClick = () => onSave(selectedPreviewImage);
    return (_jsx(AppDialog, { title: "Select your preview image", primaryButtonText: "Save", isOpen: isOpen, onClose: close, onPrimaryButtonClick: onSaveClick, children: _jsxs(Grid, { container: true, spacing: { xs: 0.5, md: 1.5 }, columns: { xs: 2, md: 3 }, children: [TRIP_PREVIEW_IMAGES.map((image) => (_jsx(Grid, { item: true, xs: 1, children: _jsx(ButtonBase, { sx: {
                            borderRadius: 4,
                            border: 4,
                            borderColor: selectedPreviewImage?.templateImageId === image.id
                                ? 'primary.main'
                                : 'white',
                            overflow: 'hidden',
                        }, onClick: () => setSelectedPreviewImage({ templateImageId: image.id }), children: _jsx("img", { src: image.src, alt: image.alt, loading: "lazy", style: { width: '100%' } }) }) }, image.id))), _jsx(Grid, { item: true, xs: 1, children: _jsx(UploadFileButton, { mainText: "Upload preview photo", subText: "PNG or PDF (max.3MB)", sx: { border: 4, borderColor: 'white' } }) })] }) }));
}
