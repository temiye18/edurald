import React from 'react';

const Service = ({ children }) => {
	return (
		<>
			<section className='service'>{children}</section>
			<style jsx>
				{`
					.service {
						background-color: #fff;
						padding: 40px 30px;
						border-radius: 20px;
						box-shadow: 0 0 30px #efefef;
					}
					.service h3 {
						font-size: 1.4rem;
						font-weight: 600;
						margin: 30px 0 10px;
					}
					.service img {
						width: 70px;
					}
					.service p {
						font-size: 16px;
					}

					@media (max-width: 600px) {
						.service {
							padding: 40px 20px;
						}
					}
				`}
			</style>
		</>
	);
};

export default Service;
