import { useDispatch, useSelector } from "react-redux";
import { FilterContainer, FilterInput } from "./Filter.styled";
import { setFilter, getFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterContainer>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        placeholder="Find contacts by name"
      />
    </FilterContainer>
  );
};