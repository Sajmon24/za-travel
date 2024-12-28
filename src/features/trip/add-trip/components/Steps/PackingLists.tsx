import { type SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '@store/index';

import PackingListForm from '../../../components/PackingListForm';
import type { Trip } from '../../../types';
import {
  nextStep,
  selectWizardTrip,
  setPackingLists,
} from '../../store/tripWizardSlice';
import Pagination from '../Navigation/Pagination';

interface FormInput {
  packingLists: Trip['packingLists'];
}

export default function PackingLists() {
  const { packingLists, onSubmit } = usePackingListsForm();

  return (
    <PackingListForm
      defaultPackingLists={packingLists}
      onSubmit={onSubmit}
      SubmitComponent={<Pagination />}
    />
  );
}

function usePackingListsForm() {
  const dispatch = useAppDispatch();
  const trip = useAppSelector(selectWizardTrip);

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    dispatch(setPackingLists(data.packingLists));
    dispatch(nextStep());
  };

  return {
    onSubmit,
    packingLists: trip.packingLists,
  };
}
