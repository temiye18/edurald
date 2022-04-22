import React from 'react';
import Button from '../components/Button';
import styles from '../assets/styles/Contact.module.css';

const Contact = () => {
	return (
		<>
			<section className={styles.form}>
				<h3>Leave us a message</h3>
				<p>We are here to answer any question you may have</p>

				<form onSubmit={(e) => e.preventDefault()}>
					<input type='text' placeholder='First Name' />
					<input type='email' placeholder='Your email address' />
					<input type='number' placeholder='Mobile no' />
					<textarea cols='20' rows='10' placeholder='Message'></textarea>
				</form>
				<p>We all know how important your information is. They are always safe with us.</p>
				<Button>Send message</Button>
			</section>
			{/* <section className={styles.info}>
				<div>
					<div>
						<IoIosCall /> <span>Phone</span>
					</div>
					<p>+234 000 000 0000</p>
				</div>
				<div>
					<div>
						<MdEmail className={styles.email} /> <span>Email</span>
					</div>
					<p>abcd@efg.com</p>
				</div>
			</section> */}
		</>
	);
};

export default Contact;
