import {
	ArrowDownward,
	ArrowUpward,
	MonitorWeight,
	Timeline,
} from '@mui/icons-material';
import {
	Box,
	Button,
	Card,
	CardContent,
	Grid2,
	Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector } from '../../config/store/hooks';
import { calculateBMI, getBMICategory } from '../../utils/healthCalculations';

export const DashboardHome = () => {
	const profile = useAppSelector((state) => state.healthData.profile);
	const weightEntries = useAppSelector(
		(state) => state.healthData.weightEntries
	);

	// Get latest weight entry
	const latestEntry =
		weightEntries.length > 0 ? weightEntries[weightEntries.length - 1] : null;

	// Get previous weight entry for comparison
	const previousEntry =
		weightEntries.length > 1 ? weightEntries[weightEntries.length - 2] : null;

	// Calculate weight change
	const weightChange =
		latestEntry && previousEntry
			? latestEntry.weight - previousEntry.weight
			: 0;

	// Calculate current BMI
	const currentBMI =
		profile && latestEntry
			? calculateBMI(latestEntry.weight, profile.height)
			: null;

	// Get BMI category
	const bmiCategory = currentBMI ? getBMICategory(currentBMI) : null;

	// Get last 7 entries for the chart
	const recentEntries = weightEntries.slice(-7);

	return (
		<Box>
			<Typography
				variant='h4'
				gutterBottom>
				Dashboard
			</Typography>

			{!profile || weightEntries.length === 0 ? (
				<Card>
					<CardContent>
						<Typography
							variant='h6'
							gutterBottom>
							Bem-vindo ao EmagreceJá!
						</Typography>
						<Typography
							variant='body1'
							paragraph>
							Para começar a acompanhar seu progresso, você precisa configurar
							seu perfil e adicionar seu peso atual.
						</Typography>
						<Grid2
							container
							spacing={2}>
							<Grid2>
								<Button
									component={RouterLink}
									to='/dashboard/profile'
									variant='contained'
									color='primary'>
									Configurar Perfil
								</Button>
							</Grid2>
							<Grid2>
								<Button
									component={RouterLink}
									to='/dashboard/weight'
									variant='outlined'
									color='primary'>
									Registrar Peso
								</Button>
							</Grid2>
						</Grid2>
					</CardContent>
				</Card>
			) : (
				<>
					<Grid2
						container
						spacing={3}
						sx={{ mb: 4 }}>
						<Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
							<Card>
								<CardContent>
									<Typography
										color='textSecondary'
										gutterBottom>
										Peso Atual
									</Typography>
									<Box sx={{ display: 'flex', alignItems: 'center' }}>
										<Typography
											variant='h4'
											component='div'>
											{latestEntry ? `${latestEntry.weight} kg` : 'N/A'}
										</Typography>
										{weightChange !== 0 && (
											<Box
												sx={{
													ml: 1,
													display: 'flex',
													alignItems: 'center',
													color:
														weightChange > 0 ? 'error.main' : 'success.main',
												}}>
												{weightChange > 0 ? (
													<ArrowUpward fontSize='small' />
												) : (
													<ArrowDownward fontSize='small' />
												)}
												<Typography variant='body2'>
													{Math.abs(weightChange).toFixed(1)} kg
												</Typography>
											</Box>
										)}
									</Box>
									<Typography
										variant='body2'
										color='textSecondary'>
										{latestEntry
											? `Última atualização: ${new Date(
													latestEntry.date
											  ).toLocaleDateString()}`
											: ''}
									</Typography>
								</CardContent>
							</Card>
						</Grid2>

						<Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
							<Card>
								<CardContent>
									<Typography
										color='textSecondary'
										gutterBottom>
										IMC Atual
									</Typography>
									<Typography
										variant='h4'
										component='div'>
										{currentBMI ? currentBMI.toFixed(1) : 'N/A'}
									</Typography>
									<Typography
										variant='body2'
										sx={{
											color:
												bmiCategory === 'Normal'
													? 'success.main'
													: bmiCategory === 'Sobrepeso'
													? 'warning.main'
													: 'error.main',
										}}>
										{bmiCategory || ''}
									</Typography>
								</CardContent>
							</Card>
						</Grid2>

						<Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
							<Card>
								<CardContent>
									<Typography
										color='textSecondary'
										gutterBottom>
										Meta de Peso
									</Typography>
									<Typography
										variant='h4'
										component='div'>
										{profile ? `${profile.goal} kg` : 'N/A'}
									</Typography>
									{profile && latestEntry && (
										<Typography
											variant='body2'
											color='textSecondary'>
											{latestEntry.weight > profile.goal
												? `Faltam ${(latestEntry.weight - profile.goal).toFixed(
														1
												  )} kg`
												: 'Meta atingida!'}
										</Typography>
									)}
								</CardContent>
							</Card>
						</Grid2>

						<Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
							<Card>
								<CardContent>
									<Typography
										color='textSecondary'
										gutterBottom>
										Registros
									</Typography>
									<Typography
										variant='h4'
										component='div'>
										{weightEntries.length}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'>
										Total de medições
									</Typography>
								</CardContent>
							</Card>
						</Grid2>
					</Grid2>

					<Grid2
						container
						spacing={3}>
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

						<Grid2 size={{ xs: 12, md: 4 }}>
							<Card sx={{ height: '100%' }}>
								<CardContent>
									<Typography
										variant='h6'
										gutterBottom>
										Ações Rápidas
									</Typography>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											gap: 2,
											mt: 2,
										}}>
										<Button
											component={RouterLink}
											to='/dashboard/weight'
											variant='contained'
											color='primary'
											startIcon={<MonitorWeight />}
											fullWidth>
											Registrar Peso Hoje
										</Button>
										<Button
											component={RouterLink}
											to='/dashboard/profile'
											variant='outlined'
											color='primary'
											fullWidth>
											Atualizar Perfil
										</Button>
									</Box>
								</CardContent>
							</Card>
						</Grid2>
					</Grid2>
				</>
			)}
		</Box>
	);
};
