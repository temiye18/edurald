import styles from '../assets/styles/Works.module.css';

const Work = ({ children }) => {
	return <section className={styles.work}>{children}</section>;
};

export default Work;
