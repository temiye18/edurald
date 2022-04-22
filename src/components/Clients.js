import { useState } from 'react';
import styles from '../assets/styles/Clients.module.css';

const Clients = () => {
	const [state, setState] = useState('one');

	const handleToggle = (e) => {
		e.currentTarget.parentElement
			.querySelectorAll('div')
			.forEach((div) => div.classList.remove('active'));

		e.currentTarget.classList.add('active');
		console.log('fired');
	};
	return (
		<section className='mb-90'>
			<h4>clients</h4>
			<h2>Our clients</h2>

			<div className={styles.slide}>
				<div className={`${styles.all} ${state}`}>
					<div>
						<img src='/assets/images/mtn.png' alt='MTN' />
						<img src='/assets/images/mtn.png' alt='MTN' />
					</div>

					<div>
						<img src='/assets/images/mtn.png' alt='MTN' />
						<img src='/assets/images/mtn.png' alt='MTN' />
					</div>

					<div>
						<img src='/assets/images/mtn.png' alt='MTN' />
						<img src='/assets/images/mtn.png' alt='MTN' />
					</div>

					<div>
						<img src='/assets/images/mtn.png' alt='MTN' />
						<img src='/assets/images/mtn.png' alt='MTN' />
					</div>
				</div>
				<div className={styles.controllers}>
					<div
						className='active'
						onClick={(e) => {
							setState('one');
							handleToggle(e);
						}}
					></div>
					<div
						onClick={(e) => {
							setState('two');
							handleToggle(e);
						}}
					></div>
					<div
						onClick={(e) => {
							setState('three');
							handleToggle(e);
						}}
					></div>
					<div
						onClick={(e) => {
							setState('four');
							handleToggle(e);
						}}
					></div>
				</div>
			</div>
		</section>
	);
};

export default Clients;
