import { useAddFilterMutation } from 'redux/filterSlice';
import { DebounceInput } from 'react-debounce-input';

import { FilterContainer, Filterlabel } from './ContactFilter.styled';

export const ContactFilter = () => {
  const [addFilter] = useAddFilterMutation();
  const handleSearch = e => {
    addFilter(e.target.value);
  };
  return (
    <FilterContainer>
      <Filterlabel>Find contacts by name</Filterlabel>
      <DebounceInput
        minLength={2}
        debounceTimeout={600}
        onChange={handleSearch}
      />
    </FilterContainer>
  );
};
