import React from 'react';

import Header from '../Components/layout/Header';
import Main from '../Components/layout/Main';
import Footer from '../Components/layout/Footer';

export default function Layout({ children }) {
	return (
		<div className="body-wrap boxed-container">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
}