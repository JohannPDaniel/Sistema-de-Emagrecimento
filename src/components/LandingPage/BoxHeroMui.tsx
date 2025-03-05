import { Box, Button, Container, Grid2, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import pessoaFeliz from '../../assets/pessoaFelizPorPerderPeso.avif';
import theme from '../../config/themes/theme';
import { TypographyGutter } from './BoxFooter/TypographyGutter';
import { CustomTypography } from './BoxFooter/CustomTypography';

export const BoxHeroMui = () => {
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Box
			sx={{
				pt: 15,
				pb: 8,
				background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
				color: 'white',
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
			}}>
			<Container>
				<Grid2
					container
					spacing={4}
					alignItems='center'>
					<Grid2 size={{ xs: 12, md: 6 }}>
						<TypographyGutter
							title='h2'
							children='Transforme seu corpo e sua vida'
						/>
						<CustomTypography
							variant='h5'
							children='Acompanhe seu progresso, visualize resultados e alcance suas metas
							de emagrecimento.'
						/>
						<Box mt={4}>
							<Button
								component={RouterLink}
								to='/login'
								variant='contained'
								color='secondary'
								size='large'
								sx={{ mr: 2, mb: isMobile ? 2 : 0 }}>
								Começar Gratuitamente
							</Button>
							<Button
								component='a'
								href='#features'
								variant='outlined'
								sx={{
									backgroundColor: 'rgba(255,255,255,0.1)',
									borderColor: 'white',
									color: 'white',
									'&:hover': {
										backgroundColor: 'rgba(255,255,255,0.2)',
										borderColor: 'white',
										scrollBehavior: 'smooth',
									},
								}}>
								Saiba Mais
							</Button>
						</Box>
					</Grid2>
					<Grid2 size={{ xs: 12, md: 6 }}>
						<Box
							component='img'
							src={pessoaFeliz}
							alt='Pessoa feliz após perder peso'
							sx={{
								width: '100%',
								maxWidth: 500,
								height: 'auto',
								borderRadius: 4,
								boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
							}}
						/>
					</Grid2>
				</Grid2>
			</Container>
		</Box>
	);
};
