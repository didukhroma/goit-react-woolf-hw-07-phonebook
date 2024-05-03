//IMPORT
import { useSelector } from 'react-redux';
//SELECTORS
import { selectContacts } from '../../redux/selectors';

const Notification = () => {
  const contacts = useSelector(selectContacts);
  return (
    <>
      {!contacts.length && (
        <>
          <p>There is no contacts here</p>
          <p>Please add new contact</p>
        </>
      )}
    </>
  );
};

export default Notification;
