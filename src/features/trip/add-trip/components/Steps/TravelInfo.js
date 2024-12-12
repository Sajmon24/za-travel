import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useForm } from 'react-hook-form';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { Box, ButtonBase, FormHelperText, Stack, TextField, Typography, } from '@mui/material';
import { Colors } from '@config/styles';
import { TRIP_PREVIEW_IMAGES } from '@features/trip/data';
import DateSelectInput from '@features/ui/form/DateSelectInput';
import useDialog from '@hooks/useDialog';
import { useAppDispatch, useAppSelector } from '@store/index';
import PreviewImageDialog from '../../../components/PreviewImageDialog';
import { nextStep, selectWizardTrip, setTravelInformation, } from '../../store/tripWizardSlice';
import Pagination from '../Navigation/Pagination';
export default function TravelInfo() {
    const { isOpen, open, close } = useDialog();
    const { handleSubmit, control, onSubmit, formValues, register, errors, onPreviewImageSave, previewImageSrc, } = useTravelInfoForm({ closePreviewImageDialog: close });
    return (_jsxs(Stack, { component: "form", noValidate: true, onSubmit: handleSubmit(onSubmit), sx: { width: '100%' }, gap: 3, children: [_jsxs(Stack, { direction: { xs: 'column', md: 'row' }, gap: 3, children: [_jsxs(Stack, { children: [_jsxs(ButtonBase, { onClick: open, sx: {
                                    borderRadius: 4,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    gap: 0.5,
                                    height: 152,
                                    minWidth: { xs: '100%', md: 152 },
                                    border: 1,
                                    borderColor: 'text.secondary',
                                }, children: [' ', previewImageSrc ? (_jsx(Box, { component: "img", sx: {
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 4,
                                            objectFit: 'cover',
                                        }, src: previewImageSrc, alt: "Trip preview" })) : (_jsxs(_Fragment, { children: [_jsx(ImageSearchIcon, { sx: { color: Colors.disabled } }), _jsx(Typography, { variant: "subtitle1", color: Colors.disabled, children: "Preview image" })] }))] }), errors.previewImage && (_jsx(FormHelperText, { error: true, sx: { maxWidth: 152 }, children: errors.previewImage.message })), _jsx("input", { type: "hidden", ...register('previewImage', {
                                    required: 'Please select a preview image!',
                                }) })] }), _jsxs(Stack, { sx: { width: '100%' }, gap: 3, children: [_jsx(Controller, { name: "name", control: control, rules: { required: 'Please specify trip name!' }, render: ({ field: { ref, ...field }, fieldState }) => (_jsx(TextField, { inputRef: ref, variant: "standard", margin: "normal", required: true, fullWidth: true, id: "name", label: "Trip Name", autoFocus: true, helperText: fieldState.error?.message, error: Boolean(fieldState.error), ...field })) }), _jsxs(Stack, { direction: "row", gap: 2, children: [_jsx(DateSelectInput, { name: "startDate", label: "Start Date", control: control, requiredErrorText: "Please specify start date!", maxDate: formValues.endDate }), _jsx(DateSelectInput, { name: "endDate", label: "End Date", control: control, requiredErrorText: "Please specify end date!", minDate: formValues.startDate })] })] })] }), _jsx(Controller, { name: "description", control: control, render: ({ field: { ref, ...field }, fieldState }) => (_jsx(TextField, { inputRef: ref, variant: "standard", margin: "normal", fullWidth: true, id: "description", label: "Description", multiline: true, maxRows: 6, inputProps: { maxLength: 200 }, helperText: fieldState.error?.message ?? `${field.value.length}/200`, error: Boolean(fieldState.error), ...field })) }), _jsx(Pagination, {}), _jsx(PreviewImageDialog, { isOpen: isOpen, close: close, onSave: onPreviewImageSave })] }));
}
function useTravelInfoForm({ closePreviewImageDialog, }) {
    const trip = useAppSelector(selectWizardTrip);
    const dispatch = useAppDispatch();
    const { handleSubmit, control, watch, register, setValue, formState: { errors }, trigger, } = useForm({
        defaultValues: {
            name: trip.name,
            description: trip.description,
            startDate: trip.startDate,
            endDate: trip.endDate,
            previewImage: trip.previewImage,
        },
    });
    const formValues = watch();
    const previewImageSrc = formValues.previewImage?.templateImageId
        ? TRIP_PREVIEW_IMAGES.find((image) => image.id === formValues.previewImage?.templateImageId)?.src
        : null;
    const onPreviewImageSave = (previewImage) => {
        closePreviewImageDialog();
        setValue('previewImage', previewImage);
        trigger('previewImage');
    };
    const onSubmit = (data) => {
        dispatch(setTravelInformation(data));
        dispatch(nextStep());
    };
    return {
        handleSubmit,
        control,
        onSubmit,
        formValues,
        register,
        errors,
        previewImageSrc,
        onPreviewImageSave,
    };
}
