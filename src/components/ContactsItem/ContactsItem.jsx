//COMPONENTS
import Button from 'components/Button';
//STYLES
import { StyledLi, StyledP, StyledSpan } from './ContactsItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

function ContactsItem({ name, phone, id }) {
  const dispatch = useDispatch();

  return (
    <StyledLi>
      <StyledP>
        <StyledSpan>{`${name}:`}</StyledSpan>
        <span>{phone}</span>
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
