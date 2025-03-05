import { Box, Grid2 } from '@mui/material';
import pessoaFeliz from '../../assets/pessoaFeliz.webp';
import { CustomTypography } from '../LandingPage/BoxFooter/CustomTypography';
import { TypographyGutter } from '../LandingPage/BoxFooter/TypographyGutter';

export const GridPost = () => {
	return (
		<Grid2 size={{ xs: 12, sm: 6 }}>
			<Box
				sx={{
					height: '100%',
					display: { xs: 'none', sm: 'flex' },
					flexDirection: 'column',
					justifyContent: 'center',
					color: 'white',
					p: 4,
				}}>
				<TypographyGutter
					title='h3'
					fontWeight='bold'
					children='EmagreçaJá'
				/>
				<TypographyGutter
					title='h5'
					children='Sua jornada para uma vida mais saudável começa aqui'
				/>
				<CustomTypography
					variant='body1'
					children='Acompanhe seu progresso, visualize resultados e alcance suas
								metas de emagrecimento com nossa plataforma intuitiva.'
				/>
				<Box
					component='img'
					src={pessoaFeliz}
					alt='Pessoa feliz após perder peso'
					sx={{
						maxWidth: '100%',
						height: 'auto',
						borderRadius: 4,
						mt: 2,
						boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
					}}
				/>
			</Box>
		</Grid2>
	);
};
