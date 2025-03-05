import { Box, Button, Container, Grid2, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import theme from '../../config/themes/theme';
import { TypographyGutter } from './BoxFooter/TypographyGutter';
import { CustomTypography } from './BoxFooter/CustomTypography';
import { works } from '../../constants/works';

export const BoxWorks = () => {
	return (
		<Box sx={{ py: 10, backgroundColor: theme.palette.grey[50] }}>
			<Container>
				<TypographyGutter
					title='h3'
					align='center'
					children='Como Funciona'
				/>
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
					{works.map((work, index) => (
						<Grid2
							key={index}
							size={{ xs: 12, md: 4 }}>
							<Box textAlign='center'>
								<Typography
									variant='h1'
									sx={{
										color: theme.palette.primary.main,
										fontWeight: 'bold',
										mb: 2,
									}}>
									{work.number}
								</Typography>
								<TypographyGutter
									title='h5'
									children={work.titleGutter}
								/>
								<CustomTypography
									variant='body1'
									color='textSecondary'
									children={work.customTitle}
								/>
							</Box>
						</Grid2>
					))}
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
