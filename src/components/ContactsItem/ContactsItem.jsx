//COMPONENTS
import Button from 'components/Button';
//STYLES
import { StyledLi, StyledP, StyledSpan } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

function ContactsItem({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <StyledLi>
      <StyledP>
        <StyledSpan>{`${name}:`}</StyledSpan>
        <span>{number}</span>
      </StyledP>
      <Button
        cbOnClick={() => dispatch(deleteContact(id))}
        id={id}
        title="Delete"
      />
    </StyledLi>
  );
}

export default ContactsItem;
