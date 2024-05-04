//IMPORT
import { InfinitySpin } from 'react-loader-spinner';
//STYLES
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4d67a9"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
