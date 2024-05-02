//COMPONENTS
import Button from 'components/Button';
//STYLES
import { StyledLi, StyledP, StyledSpan } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

function ContactsItem({ name, number, id }) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(deleteContact(id));

  return (
    <StyledLi>
      <StyledP>
        <StyledSpan>{`${name}:`}</StyledSpan>
        <span>{number}</span>
      </StyledP>
      <Button cbOnClick={handleClick} id={id} title="Delete" />
    </StyledLi>
  );
}

export default ContactsItem;
