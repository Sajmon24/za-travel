import PackingListForm from '../../components/PackingListForm';
import type { Trip } from '../../types';
import ContentCard from './ContentCard';

interface Props {
  trip: Trip;
  onUpdate: (data: Partial<Trip>) => void;
}

export default function PackingLists({ trip, onUpdate }: Props) {
  const onChange = (packingLists: Trip['packingLists']) => {
    onUpdate({ packingLists });
  };
  return (
    <ContentCard title="Packing list">
      <PackingListForm
        defaultPackingLists={trip.packingLists}
        onChange={onChange}
      />
    </ContentCard>
  );
}
