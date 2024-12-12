import { jsx as _jsx } from "react/jsx-runtime";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MobileStepper } from '@mui/material';
import AppButton from '@features/ui/AppButton';
import { useBreakpoints } from '@hooks/useBreakpoints';
import { useAppDispatch, useAppSelector } from '@store/index';
import { WIZARD_STEPS } from '../../data';
import { previousStep, selectCurrentStep } from '../../store/tripWizardSlice';
export default function Pagination() {
    const dispatch = useAppDispatch();
    const currentStep = useAppSelector(selectCurrentStep);
    const { md, lg } = useBreakpoints();
    const onBackButtonClick = () => dispatch(previousStep());
    return (_jsx(MobileStepper, { variant: lg ? 'dots' : 'text', steps: WIZARD_STEPS.length, position: "static", activeStep: currentStep, nextButton: _jsx(AppButton, { fullWidth: !md, type: "submit", endIcon: _jsx(ArrowForwardIcon, {}), children: "Next" }), backButton: _jsx(AppButton, { onClick: onBackButtonClick, fullWidth: !md, variant: "outlined", startIcon: _jsx(ArrowBackIcon, {}), sx: { visibility: currentStep === 0 ? 'hidden' : 'visible' }, children: "Back" }), sx: {
            '.MuiMobileStepper-dots': {
                visibility: 'hidden',
            },
            display: 'flex',
            gap: 2,
            whiteSpace: 'nowrap',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            p: { xs: 2, md: 3 },
            borderRadius: 4,
        } }));
}
