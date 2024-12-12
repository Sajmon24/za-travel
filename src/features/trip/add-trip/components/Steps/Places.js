import { jsx as _jsx } from "react/jsx-runtime";
import { useAppDispatch, useAppSelector } from '@store/index';
import PlacesForm from '../../../components/PlacesForm';
import { nextStep, selectWizardTrip, setPlaces, } from '../../store/tripWizardSlice';
import Pagination from '../Navigation/Pagination';
export default function Places() {
    const { places, onSubmit } = usePlacesForm();
    return (_jsx(PlacesForm, { defaultPlaces: places, onSubmit: onSubmit, SubmitComponent: _jsx(Pagination, {}) }));
}
function usePlacesForm() {
    const dispatch = useAppDispatch();
    const trip = useAppSelector(selectWizardTrip);
    const onSubmit = (data) => {
        dispatch(setPlaces(data.places));
        dispatch(nextStep());
    };
    return {
        onSubmit,
        places: trip.places,
    };
}
