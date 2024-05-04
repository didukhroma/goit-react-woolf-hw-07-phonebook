//IMPORT
import { useSelector } from 'react-redux';
//COMPONENTS
import ContactsItem from 'components/ContactsItem';
//SELECTORS
import { selectError, selectFilteredContacts } from '../../redux/selectors';

//STYLES
import { StyledList } from './ContactsList.styled';

function ContactsList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const errorMessage = useSelector(selectError);

  return (
    <>
      {!errorMessage && (
        <StyledList>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactsItem key={id} name={name} phone={phone} id={id} />
          ))}
        </StyledList>
      )}
    </>
  );
}

export default ContactsList;
