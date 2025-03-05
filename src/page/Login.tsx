import { Box, Container, Grid2, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { AuthTabs } from '../components/Login/AuthTabs';
import { GridPost } from '../components/Login/GridPost';
import SnackbarAlert from '../components/SnackBarAlert';

export const Login = () => {
	const theme = useTheme();

	useEffect(() => {
		document.title = 'Cadastro e Login';
	}, []);
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
				py: 4,
			}}>
			<Container maxWidth='md'>
				<Grid2
					container
					spacing={2}
					alignItems='stretch'>
					<GridPost />
					<AuthTabs />
				</Grid2>
			</Container>

			<SnackbarAlert />
		</Box>
	);
};
