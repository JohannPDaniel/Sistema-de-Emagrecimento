import { Box, Container, Grid2, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import theme from '../../config/themes/theme';
import { socials } from '../../constants/socials';
import { CustomTypography } from './BoxFooter/CustomTypography';
import { TypographyGutter } from './BoxFooter/TypographyGutter';

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
						<TypographyGutter
							children='EmagreçaJá'
							title='h6'
						/>
						<CustomTypography
							variant='body2'
							color='grey.400'
							children='Sua plataforma completa para acompanhamento de emagrecimento e
							saúde.'
						/>
					</Grid2>
					<Grid2 size={{ xs: 12, md: 2 }}>
						<TypographyGutter children='Links Rápidos' />
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
						<TypographyGutter children='Contato' />
						<CustomTypography
							variant='body2'
							color='grey.400'
							children='contato@emagrecaJa.com'
						/>
						<CustomTypography
							variant='body2'
							color='grey.400'
							children='(11) 99999-9999'
						/>
					</Grid2>
					<Grid2 size={{ xs: 12, md: 3 }}>
						<TypographyGutter children='Redes Sociais' />

						{socials.map((social, index) => (
							<Stack
								key={index}
								direction='row'
								spacing={2}>
								<Link
									href='#'
									color='inherit'>
									{social}
								</Link>
							</Stack>
						))}
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
