import { MAX_TRIP_DESTINATIONS } from '../costants';
import Destination from './components/Steps/Destinations';
import Expenses from './components/Steps/Expenses';
import Places from './components/Steps/Places';
import TravelInfo from './components/Steps/TravelInfo';
export const WIZARD_STEPS = [
    {
        title: 'Travel information',
        description: 'Describe your trip to always easily find it on your travel board.',
        Component: TravelInfo,
    },
    {
        title: 'Destination',
        description: `Add where are you going to. You can add maximum ${MAX_TRIP_DESTINATIONS} destinations.`,
        Component: Destination,
    },
    {
        title: 'Places to visit',
        description: 'Plan your perfect adventure with our curated list of must-visit places.',
        Component: Places,
    },
    {
        title: 'Budget',
        description: 'Easily enter details about each expense and stay organized and informed about where your money is going.',
        Component: Expenses,
    },
    {
        title: 'Documents',
        description: 'Upload documents that you need for your trip.',
        Component: TravelInfo,
    },
    {
        title: 'Packing list',
        description: 'Plan what you will need to grab with you to a trip. Add up to 4 checklists.',
        Component: TravelInfo,
    },
    {
        title: 'Photo',
        description: 'Add your memories here!',
        Component: TravelInfo,
    },
];