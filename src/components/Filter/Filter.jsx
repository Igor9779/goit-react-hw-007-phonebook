import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { FilterContainer, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <FilterContainer>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Find contacts by name"
      />
    </FilterContainer>
  );
};
