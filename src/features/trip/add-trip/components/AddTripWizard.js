import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '@store/index';
import { WIZARD_STEPS } from '../data';
import { selectCurrentStep } from '../store/tripWizardSlice';
import DesktopStepper from './Navigation/DesktopStepper';
export default function AddTripWizard() {
    const currentStep = useAppSelector(selectCurrentStep);
    const stepData = WIZARD_STEPS[currentStep];
    const StepComponent = stepData.Component;
    return (_jsxs(Box, { children: [_jsx(DesktopStepper, { steps: WIZARD_STEPS, currentStep: currentStep }), _jsxs(Box, { sx: {
                    bgcolor: 'white',
                    p: { xs: 2, md: 3 },
                    pb: { xs: 10, md: 13 },
                    borderRadius: 4,
                    maxWidth: 926,
                    mx: 'auto',
                    position: 'relative',
                }, children: [_jsxs(Typography, { color: "text.secondary", sx: { mb: 1 }, children: [' ', "Step ", currentStep + 1] }), _jsx(Typography, { variant: "h4", sx: { mb: { xs: 3, md: 1 } }, children: stepData.title }), _jsx(Typography, { variant: "subtitle1", color: "text.secondary", sx: { display: { xs: 'none', md: 'block' }, mb: 3, maxWidth: '72%' }, children: stepData.description }), _jsx(Box, { sx: {
                            minHeight: { xs: '56vh', md: 'auto' },
                            maxHeight: { xs: '56vh', md: '40vh' },
                            overflowY: 'scroll',
                        }, children: _jsx(StepComponent, {}) })] })] }));
}
