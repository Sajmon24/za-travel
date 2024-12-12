import { jsx as _jsx } from "react/jsx-runtime";
import { Step, StepLabel, Stepper } from '@mui/material';
import { useBreakpoints } from '@hooks/useBreakpoints';
export default function DesktopStepper({ currentStep, steps }) {
    const { xl } = useBreakpoints();
    return (_jsx(Stepper, { activeStep: currentStep, alternativeLabel: !xl, sx: { display: { xs: 'none', lg: 'flex' }, mb: 8, ml: -1 }, children: steps.map(({ title }) => (_jsx(Step, { children: _jsx(StepLabel, { StepIconProps: {
                    sx: {
                        height: { xs: 35, xl: 49 },
                        width: { xs: 35, xl: 49 },
                    },
                }, children: title }) }, title))) }));
}
