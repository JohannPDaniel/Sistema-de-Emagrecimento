import { Timeline } from '@mui/icons-material';
import {
	Box,
	Button,
	Card,
	CardContent,
	Grid2,
	Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector } from '../../../config/store/hooks';
import { WeightChart } from '../WeightChart';

export const WeightEvolution = () => {
	const weightEntries = useAppSelector(
		(state) => state.healthData.weightEntries
	);

	const recentEntries = weightEntries.slice(-7);

	return (
		<Grid2 size={{ xs: 12, md: 8 }}>
			<Card>
				<CardContent>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							mb: 2,
						}}>
						<Typography variant='h6'>Evolução do Peso</Typography>
						<Button
							component={RouterLink}
							to='/dashboard/weight'
							size='small'
							endIcon={<Timeline />}>
							Ver Detalhes
						</Button>
					</Box>
					<Box sx={{ height: 300 }}>
						{recentEntries.length > 0 ? (
							<WeightChart data={recentEntries} />
						) : (
							<Box
								sx={{
									height: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<Typography
									variant='body1'
									color='textSecondary'>
									Sem dados suficientes para exibir o gráfico
								</Typography>
							</Box>
						)}
					</Box>
				</CardContent>
			</Card>
		</Grid2>
	);
};
