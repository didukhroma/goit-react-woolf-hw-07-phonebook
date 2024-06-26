import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//COMPONENTS
import Button from 'components/Button';
//SETTINGS
import { INITIAL_STATE_FORM } from 'settings/settings';
//SELECTORS
import { selectContacts, selectError } from '../../redux/selectors';
//ACTIONS
import { addContact } from '../../redux/operations';
//STYLES
import { StyledForm, StyledLabel } from './ContactForm.styled';

export default function ContactForm() {
  const [contact, setContact] = useState(INITIAL_STATE_FORM);

  const contacts = useSelector(selectContacts);
  const errorMessage = useSelector(selectError);
  const dispatch = useDispatch();

  const isContactPresent = contacts.find(
    ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    if (isContactPresent) {
      alert(`${contact.name} is already in contacts.`);
      setContact(INITIAL_STATE_FORM);
      return;
    }
    dispatch(addContact(contact));
    setContact(INITIAL_STATE_FORM);
  };

  const handleChange = ({ target: { name, value } }) =>
    setContact(prev => {
      return { ...prev, [name]: value };
    });

  return (
    <>
      {!errorMessage && (
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            <span>Name</span>
            <input
              name="name"
              type="text"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={contact.name}
              onChange={handleChange}
              // eslint-disable-next-line no-useless-escape
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
          </StyledLabel>
          <StyledLabel>
            <span>Number</span>
            <input
              name="phone"
              type="tel"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={contact.phone}
              onChange={handleChange}
              // eslint-disable-next-line no-useless-escape
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
            />
          </StyledLabel>

          <Button title="Add contact" />
        </StyledForm>
      )}
    </>
  );
}
