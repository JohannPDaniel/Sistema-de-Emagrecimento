import { Box } from '@mui/material';
import { AppBarMui } from '../components/AppBarMui';
import { BoxHeroMui } from '../components/BoxHeroMui';
import { BoxFeatures } from '../components/BoxFeatures';
import { BoxWorks } from '../components/BoxWorks';
import { BoxTestimonials } from '../components/BoxTestimonials';
import { BoxCTA } from '../components/BoxCTA';
import { BoxFooter } from '../components/BoxFooter';

export const LandingPage = () => {
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
