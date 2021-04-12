import styles from './Home.module.css';
import background from './phone.jpg';

const Home = () => (
  <div
    style={{
      backgroundImage: `linear-gradient(
      rgba(11, 134, 179, 0.5), rgba(40, 44, 52, 0.2)), url(${background})`,
    }}
    className={styles.homePage}
  >
    <h1 className={styles.homeTitle}>Hello. It's your phonebook.</h1>
  </div>
);
export default Home;
