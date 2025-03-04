import { Box } from '@mui/material';
import {
	AppBarMui,
	BoxHeroMui,
	BoxFeatures,
	BoxWorks,
	BoxTestimonials,
	BoxCTA,
	BoxFooter,
} from '../components/LandingPage';
import { useEffect } from "react";

export const LandingPage = () => {
	useEffect( () => {
		document.title = "Pagina principal"
	}, [] )
	
	return (
		<Box>
			{/* Navbar */}
			<AppBarMui />
			{/* Hero Section */}
			<BoxHeroMui />
			{/* Features Section */}
			<BoxFeatures />
			{/* How It Works Section */}
			<BoxWorks />
			{/* Testimonials Section */}
			<BoxTestimonials />
			{/* CTA Section */}
			<BoxCTA />
			{/* Footer */}
			<BoxFooter />
		</Box>
	);
};
