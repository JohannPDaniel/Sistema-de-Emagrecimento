import {
	AppBar,
	Button,
	Container,
	Stack,
	Toolbar,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import theme from "../../config/themes/theme";

export const AppBarMui = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		});
	}

	return (
		<AppBar
			position='fixed'
			color='default'
			elevation={isScrolled ? 20 : 0}
			sx={{
				backgroundColor: 'white',
				transition: 'all 0.3s ease',
			}}>
			<Container>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'
						sx={{
							flexGrow: 1,
							fontWeight: 700,
							color: theme.palette.primary.main,
						}}>
						EmagreçaJá
					</Typography>
					<Stack
						direction='row'
						spacing={2}>
						<Button
							component={RouterLink}
							to='/login'
							variant='contained'
							color='primary'>
							Login
						</Button>
						<Button
							component={RouterLink}
							to='/login'
							variant='contained'
							color='primary'>
							Começar Agora
						</Button>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
