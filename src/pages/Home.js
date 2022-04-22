import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Work from '../components/Work';
import Service from '../components/Service';
import Clients from '../components/Clients';

const Home = () => {
	return (
		<>
			<HeroSection />

			<section className='mb-90 services'>
				<div>
					<h4>Services</h4>
					<h2>Core services</h2>
					<p className='mb-50'>
						We provide digital experience services to businesses looking for digital
						transformation of their design & development, lead generation, digital media
						and communications requirements.
					</p>
				</div>

				<div>
					<Service>
						<img src='/assets/svgs/comp.svg' alt='' />
						<h3>Web & Mobile Development</h3>
						<p>
							Our full-stack design and development team provides front-end, back-end
							and mobile development services.
						</p>
					</Service>
					<div className='mb-30'></div>
					<Service>
						<img src='/assets/svgs/comp.svg' alt='' />
						<h3>UI/UX Deseign</h3>
						<p>
							Our UI/UX designers focus on improving conversion and increasing
							customer engagement.
						</p>
					</Service>
				</div>
			</section>

			<section className='mb-90'>
				<h4>projects</h4>
				<h2>Our work</h2>
				<div className='w-grid-home mb-50 mt-40'>
					<Work>
						<header>
							<img
								src='https://www.arm.com.ng/wp-content/uploads/2021/07/New-Project-2.png'
								alt='ARM'
							/>
						</header>

						<ul>
							<li>
								Implemented a merger product between different arms of business for
								the group.
							</li>

							<li>Manage the digital office software development process</li>

							<li>
								Responsible for driving the delivery of web, mobile and USSD product
								channels.
							</li>

							<li>Maintaining source code versioning repositories</li>

							<li>Ensure quality in products delivered</li>

							<li>
								Coaching and mentoring team of engineers and other interns
								interested in technology and finance.
							</li>
						</ul>

						<div className='footer'>Asset & Resource Management Investment LTD</div>
					</Work>

					<Work>
						<header>
							<img
								src='https://paydayinvestor.ng/LandingPage/images/payday-investor-logo.svg'
								alt='payday'
							/>
						</header>

						<ul>
							<li>
								Re-created the application with a new stack (from ionic to xamarin)
								for iPhone and Android market channels.
							</li>

							<li>
								Optimized the application for growth, plugging various marketing
								tools such as Facebook SDK, Firebase, one-Signal, branch.io etc. and
								in the process increasing transaction processing to the tune of over
								2 billion.
							</li>

							<li>
								Tracked and fixed bugs found through the use of appcenter bug
								diagnostics.
							</li>

							<li>
								Tracking analytics and generating usage reports using tools like
								firebase, google analytics, mssql, appcenter analytics.
							</li>

							<li>Carried out system security analysis</li>

							<li>
								Re-created the application with a new stack from xamarin to flutter
								(didn&apos;t make it to production). For iPhone and Android market
								channel
							</li>
						</ul>

						<div className='footer'>Payday Investor</div>
					</Work>
				</div>
				<Link to='works'>
					<Button>see all projects</Button>
				</Link>
			</section>

			<Clients />
		</>
	);
};

export default Home;
