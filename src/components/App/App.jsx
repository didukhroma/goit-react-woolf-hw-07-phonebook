//IMPORT
import { useEffect } from 'react';
//COMPONENTS
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import Container from 'components/Container';
import Notification from 'components/Notification';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
//OPERATIONS
import { fetchContacts } from '../../redux/operations';
//STYLES
import { StyledMainTitle, StyledTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <Loader />}
      <ErrorMessage />
      {!errorMessage && <StyledMainTitle>Phonebook</StyledMainTitle>}
      <ContactForm />
      {!errorMessage && <StyledTitle>Contacts</StyledTitle>}
      <Filter />
      <ContactsList />
      <Notification />
    </Container>
  );
}
