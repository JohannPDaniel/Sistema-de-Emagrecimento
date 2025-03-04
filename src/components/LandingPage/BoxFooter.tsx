import { Box, Container, Grid2, Typography, Stack, Link } from '@mui/material';
import theme from '../../config/themes/theme';
import { Link as RouterLink } from 'react-router-dom';

export const BoxFooter = () => {
	return (
		<Box
			sx={{
				py: 6,
				backgroundColor: theme.palette.grey[900],
				color: 'white',
			}}>
			<Container>
				<Grid2
					container
					spacing={4}>
					<Grid2 size={{ xs: 12, md: 4 }}>
						<Typography
							variant='h6'
							gutterBottom>
							EmagreçaJá
						</Typography>
						<Typography
							variant='body2'
							color='grey.400'>
							Sua plataforma completa para acompanhamento de emagrecimento e
							saúde.
						</Typography>
					</Grid2>
					<Grid2 size={{ xs: 12, md: 2 }}>
						<Typography
							variant='subtitle1'
							gutterBottom>
							Links Rápidos
						</Typography>
						<Link
							component={RouterLink}
							to='/'
							color='inherit'
							display='block'
							sx={{ mb: 1 }}>
							Home
						</Link>
						<Link
							component={RouterLink}
							to='/login'
							color='inherit'
							display='block'
							sx={{ mb: 1 }}>
							Login
						</Link>
						<Link
							component='a'
							href='#features'
							color='inherit'
							display='block'>
							Recursos
						</Link>
					</Grid2>
					<Grid2 size={{ xs: 12, md: 3 }}>
						<Typography
							variant='subtitle1'
							gutterBottom>
							Contato
						</Typography>
						<Typography
							variant='body2'
							color='grey.400'>
							contato@emagrecaJa.com
						</Typography>
						<Typography
							variant='body2'
							color='grey.400'>
							(11) 99999-9999
						</Typography>
					</Grid2>
					<Grid2 size={{ xs: 12, md: 3 }}>
						<Typography
							variant='subtitle1'
							gutterBottom>
							Redes Sociais
						</Typography>
						<Stack
							direction='row'
							spacing={2}>
							<Link
								href='#'
								color='inherit'>
								Instagram
							</Link>
							<Link
								href='#'
								color='inherit'>
								Facebook
							</Link>
							<Link
								href='#'
								color='inherit'>
								Twitter
							</Link>
						</Stack>
					</Grid2>
				</Grid2>
				<Box
					mt={4}
					pt={4}
					borderTop={1}
					borderColor='grey.800'
					textAlign='center'>
					<Typography
						variant='body2'
						color='grey.500'>
						© {new Date().getFullYear()} EmagreçaJá. Todos os direitos
						reservados.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};
