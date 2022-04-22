import React from 'react';
import Work from '../components/Work';
import styles from '../assets/styles/Works.module.css';
import Clients from '../components/Clients';

const Works = () => {
	return (
		<>
			<h1 className={styles.h1}>Featured Work</h1>
			<div className='w-grid mb-50 mt-40'>
				<Work>
					<header>
						<img
							src='https://www.arm.com.ng/wp-content/uploads/2021/07/New-Project-2.png'
							alt='ARM'
						/>
					</header>

					<ul>
						<li>
							Implemented a merger product between different arms of business for the
							group.
						</li>

						<li>Manage the digital office software development process</li>

						<li>
							Responsible for driving the delivery of web, mobile and USSD product
							channels.
						</li>

						<li>Maintaining source code versioning repositories</li>

						<li>Ensure quality in products delivered</li>

						<li>
							Coaching and mentoring team of engineers and other interns interested in
							technology and finance.
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
							Re-created the application with a new stack (from ionic to xamarin) for
							iPhone and Android market channels.
						</li>

						<li>
							Optimized the application for growth, plugging various marketing tools
							such as Facebook SDK, Firebase, one-Signal, branch.io etc. and in the
							process increasing transaction processing to the tune of over 2 billion.
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

				<Work>
					<header>
						<img src='https://www.avante-cs.com/img/site-logo.png' alt='avante' />
					</header>

					<ul>
						<li>
							Implemented a Knowledge Base Management system for several companies in
							the Telecoms and Banking sectors such as{' '}
							<big>
								MTN Nigeria, Access bank, Etisalat, Stanbic Pensions, Diamond Bank
							</big>{' '}
							etc.
						</li>

						<li>
							Provided first level support and interfaced between clients and OEM for
							issues that required escalations.
						</li>

						<li>
							Implemented and provided support for a Customer Relations Management
							system, which includes email routers, chat channels and workflows with a
							software called eGain.
						</li>

						<li>Development of a customer loyalty app called MoLoyal using ionic.</li>
					</ul>

					<div className='footer'>Avante Consulting Solutions</div>
				</Work>

				<Work>
					<header>
						<img
							src='https://simplexsystem.com/wp-content/uploads/2020/06/Normal-Logo.png'
							alt='Simplex'
						/>
					</header>

					<ul>
						<li>
							Implementation of several Enterprise Resource Planner products with full
							support to clients. Products include (Accounting softwares, Investment
							Management systems, Life Insurance system etc.)
						</li>

						<li>
							Implementation of enterprise wide Business Intelligence projects using
							Qlikview for various organizations across different industries, e.g{' '}
							<big>
								Total Nigeria CPFA, Premium Pensions Limited, Nestle Nigeria CPFA,
								Legacy Pensions, Meristem Wealth Management, ROSABON Financial
								Services, Equator Capital Limited, America International Insurance
								Company Capital (AIICO Capital), Zenith Capital
							</big>
						</li>

						<li>
							Helped several Pension Fund Administrators (PFAs) such as{' '}
							<big>
								AIICO Pensions (Lagos Nigeria), Legacy Pensions (Abuja Nigeria),
								Total Closed Pension Fund Administrators (Lagos Nigeria), Nestle
								Closed Pension Fund Administrators (Lagos Nigeria) And Premium
								Pensions Limited PPL In creating a valid report that they send to
								the Pension Commission (PENCOM)
							</big>{' '}
							on a daily, weekly, monthly and quarterly basis through the use of my
							knowledge of SQL scripting. This helped them avoid paying hefty fines
							worth millions(billions when adjusted for inflation now) of naira in
							penalty for lateness fee.
						</li>
					</ul>

					<div className='footer'>Simplex Business Solutions</div>
				</Work>
			</div>
			<Clients />
		</>
	);
};

export default Works;
