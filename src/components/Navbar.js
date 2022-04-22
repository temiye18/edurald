import { VscThreeBars } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	return (
		<nav className={styles.nav}>
			<div>edurald</div>
			<div className={styles.ham} onClick={() => setIsSideBarOpen(true)}>
				<VscThreeBars />
			</div>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/works'>Works</Link>
				</li>
				<li>
					<Link to='/contact'>contact</Link>
				</li>
			</ul>

			<aside className={`${styles.sidebar} ${isSideBarOpen ? '' : 'close'}`}>
				<div className={styles.list}>
					<div>
						<div onClick={() => setIsSideBarOpen(false)} className={styles.close}>
							<AiOutlineClose />
						</div>

						<div>
							<Link to='/'>Home</Link>
						</div>
						<div>
							<Link to='/works'>Works</Link>
						</div>
						<div>
							<Link to='/contact'>contact</Link>
						</div>
					</div>
				</div>
				<div onClick={() => setIsSideBarOpen(false)} className={styles.bg}></div>
			</aside>
		</nav>
	);
};

export default Navbar;
