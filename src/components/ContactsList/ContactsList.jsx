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
          {filteredContacts.map(({ id, name, number }) => (
            <ContactsItem key={id} name={name} number={number} id={id} />
          ))}
        </StyledList>
      )}
    </>
  );
}

export default ContactsList;
