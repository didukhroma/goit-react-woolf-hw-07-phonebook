//IMPORT
import { useSelector } from 'react-redux';
//COMPONENTS
import ContactsItem from 'components/ContactsItem';
//SELECTORS
import { getContacts, getFilter } from '../../redux/selectors';
//HELPERS
import { contactsFilter } from '../../helpers/contactsFilter';
//STYLES
import { StyledList } from './ContactsList.styled';

function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contactsFilter(contacts, filter);

  return (
    <StyledList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} id={id} />
      ))}
    </StyledList>
  );
}

export default ContactsList;
