import { Box, Container, Grid2, Typography, Button } from '@mui/material';
import theme from '../../config/themes/theme';
import { Link as RouterLink } from 'react-router-dom';


export const BoxCTA = () => {
	return (
		<Box
			sx={{
				py: 10,
				backgroundColor: theme.palette.primary.main,
				color: 'white',
			}}>
			<Container>
				<Grid2
					container
					spacing={4}
					alignItems='center'
					justifyContent='center'>
					<Grid2
						size={{ xs: 12, md: 8 }}
						textAlign='center'>
						<Typography
							variant='h3'
							component='h2'
							gutterBottom>
							Pronto para transformar seu corpo?
						</Typography>
						<Typography
							variant='h6'
							paragraph>
							Comece sua jornada de emagrecimento hoje mesmo e veja resultados
							reais.
						</Typography>
						<Button
							component={RouterLink}
							to='/login'
							variant='contained'
							color='secondary'
							size='large'
							sx={{ mt: 2 }}>
							Começar Gratuitamente
						</Button>
					</Grid2>
				</Grid2>
			</Container>
		</Box>
	);
};
