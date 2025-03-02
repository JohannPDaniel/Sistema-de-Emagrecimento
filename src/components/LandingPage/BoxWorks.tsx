import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import theme from '../../config/themes/theme';

export const BoxWorks = () => {
	return (
		<Box sx={{ py: 10, backgroundColor: theme.palette.grey[50] }}>
			<Container>
				<Typography
					variant='h3'
					component='h2'
					align='center'
					gutterBottom>
					Como Funciona
				</Typography>
				<Typography
					variant='h6'
					align='center'
					color='textSecondary'
					sx={{ mb: 6 }}>
					Três passos simples para começar sua jornada de transformação
				</Typography>

				<Grid2
					container
					spacing={4}
					alignItems='center'>
					<Grid2 size={{ xs: 12, md: 4 }}>
						<Box textAlign='center'>
							<Typography
								variant='h1'
								component='div'
								sx={{
									color: theme.palette.primary.main,
									fontWeight: 'bold',
									mb: 2,
								}}>
								1
							</Typography>
							<Typography
								variant='h5'
								gutterBottom>
								Crie sua conta
							</Typography>
							<Typography
								variant='body1'
								color='textSecondary'>
								Registre-se gratuitamente e configure seu perfil com suas
								informações básicas.
							</Typography>
						</Box>
					</Grid2>
					<Grid2 size={{ xs: 12, md: 4 }}>
						<Box textAlign='center'>
							<Typography
								variant='h1'
								component='div'
								sx={{
									color: theme.palette.primary.main,
									fontWeight: 'bold',
									mb: 2,
								}}>
								2
							</Typography>
							<Typography
								variant='h5'
								gutterBottom>
								Registre seus dados
							</Typography>
							<Typography
								variant='body1'
								color='textSecondary'>
								Adicione seu peso atual, altura e defina suas metas de
								emagrecimento.
							</Typography>
						</Box>
					</Grid2>
					<Grid2 size={{ xs: 12, md: 4 }}>
						<Box textAlign='center'>
							<Typography
								variant='h1'
								component='div'
								sx={{
									color: theme.palette.primary.main,
									fontWeight: 'bold',
									mb: 2,
								}}>
								3
							</Typography>
							<Typography
								variant='h5'
								gutterBottom>
								Acompanhe seu progresso
							</Typography>
							<Typography
								variant='body1'
								color='textSecondary'>
								Visualize gráficos de evolução do seu peso e IMC para manter-se
								motivado.
							</Typography>
						</Box>
					</Grid2>
				</Grid2>

				<Box
					textAlign='center'
					mt={6}>
					<Button
						component={RouterLink}
						to='/login'
						variant='contained'
						color='primary'
						size='large'>
						Comece Agora
					</Button>
				</Box>
			</Container>
		</Box>
	);
};
