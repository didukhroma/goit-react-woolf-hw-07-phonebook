//IMPORT
import { useDispatch, useSelector } from 'react-redux';
//SELECTORS
import { selectError, selectFilter } from '../../redux/selectors';
//ACTIONS
import { updateFilter } from '../../redux/filterSlice';
//STYLES
import { StyledForm, StyledTitle } from './Filter.styled';
import { StyledLabel } from 'components/ContactForm/ContactForm.styled';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const errorMessage = useSelector(selectError);

  const handleChange = ({ target: { value } }) => dispatch(updateFilter(value));

  return (
    <>
      {!errorMessage && (
        <StyledForm>
          <StyledTitle>Find contacts by name</StyledTitle>
          <StyledLabel>
            <span>Name</span>
            <input
              name="filter"
              type="text"
              title="filtered contacts"
              value={filter}
              onChange={handleChange}
              required
            />
          </StyledLabel>
        </StyledForm>
      )}
    </>
  );
}

export default Filter;
