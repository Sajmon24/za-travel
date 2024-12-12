import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HomeIcon from '@mui/icons-material/Home';
import { AppRoutes } from '@config/routes/AppRoutes';
export const ACCOUNT_LINKS = [
    {
        Icon: HomeIcon,
        text: 'Home',
        path: AppRoutes.dashboard,
    },
    {
        Icon: AirplanemodeActiveIcon,
        text: 'Trips',
        path: AppRoutes.trips,
    },
];
