import { useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors';

const ErrorMessage = () => {
  const errorMessage = useSelector(selectError);

  return (
    <>
      {errorMessage && (
        <>
          <h3>{errorMessage}</h3>
          <h3>Please try again after few minutes</h3>
        </>
      )}
    </>
  );
};

export default ErrorMessage;
