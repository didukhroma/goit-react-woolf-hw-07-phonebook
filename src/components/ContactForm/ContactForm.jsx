import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
//COMPONENTS
import Button from 'components/Button';
//SETTINGS
import { INITIAL_STATE_FORM } from 'settings/settings';
//SELECTORS
import { getContacts } from '../../redux/selectors';
//ACTIONS
import { addContact } from '../../redux/contactsSlice';
//STYLES
import { StyledForm, StyledLabel } from './ContactForm.styled';

export default function ContactForm() {
  const [contact, setContact] = useState(INITIAL_STATE_FORM);

  const contacts = useSelector(getContacts);
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
    dispatch(addContact({ ...contact, id: nanoid() }));
    setContact(INITIAL_STATE_FORM);
  };

  const handleChange = ({ target: { name, value } }) =>
    setContact(prev => {
      return { ...prev, [name]: value };
    });

  return (
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
          name="number"
          type="tel"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={contact.number}
          onChange={handleChange}
          // eslint-disable-next-line no-useless-escape
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </StyledLabel>

      <Button title="Add contact" />
    </StyledForm>
  );
}
