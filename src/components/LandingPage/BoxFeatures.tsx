import {
	Box,
	Container,
	Typography,
	Grid2,
	Card,
	CardContent,
} from '@mui/material';
import { features } from '../../constants/feature';

export const BoxFeatures = () => {
	return (
		<Box
			id='features'
			sx={{ py: 10 }}>
			<Container>
				<Typography
					variant='h3'
					component='h2'
					align='center'
					gutterBottom>
					Como podemos ajudar você
				</Typography>
				<Typography
					variant='h6'
					align='center'
					color='textSecondary'
					paragraph
					sx={{ mb: 6 }}>
					Ferramentas poderosas para acompanhar seu progresso e alcançar
					resultados
				</Typography>

				<Grid2
					container
					spacing={4}>
					{features.map((feature, index) => (
						<Grid2
							size={{ xs: 12, sm: 6, md: 3 }}
							key={index}>
							<Card
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
								}}>
								<CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
									<Box sx={{ mb: 2 }}>{feature.icon}</Box>
									<Typography
										variant='h5'
										component='h3'
										gutterBottom>
										{feature.title}
									</Typography>
									<Typography
										variant='body1'
										color='textSecondary'>
										{feature.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid2>
					))}
				</Grid2>
			</Container>
		</Box>
	);
};
