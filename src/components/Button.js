import styles from '../assets/styles/Button.module.css';

const Button = ({ children }) => {
	return <button className={styles.btn}>{children}</button>;
};

export default Button;
