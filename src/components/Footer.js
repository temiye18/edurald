import { Link } from 'react-router-dom';
import styles from '../assets/styles/Footer.module.css';
import Button from './Button';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>Talk to us about your</div>
			<div className='blue'>project</div>
			<Link to='contact'>
				<Button>contact us</Button>
			</Link>
			<div className={styles.bottom}>
				<div>
					Copyright 2022 <span className='blue'>Edurald</span>. All Rights Reserved.
				</div>
				<div className={styles.socials}>
					<Link to='/'>
						<FaFacebookF />
					</Link>
					<Link to='/'>
						<FaTwitter />
					</Link>
					<Link to='/'>
						<FaInstagram />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
