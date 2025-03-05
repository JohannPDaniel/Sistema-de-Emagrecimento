import { Box, Card, CardContent, Grid2, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppSelector } from '../../config/store/hooks';
import { TypographyGutter } from '../LandingPage/BoxFooter/TypographyGutter';
import { CurrentBMI } from "./DashboardHome/CurrentBMI";
import { CurrentWeight } from "./DashboardHome/CurrentWeight";
import { GridButton } from "./DashboardHome/GridButton";
import { QuickActions } from "./DashboardHome/QuickActions";
import { Records } from "./DashboardHome/Records";
import { WeightEvolution } from "./DashboardHome/WeightEvolution";
import { WeightGoal } from "./DashboardHome/WeightGoal";

export const DashboardHome = () => {
	const profile = useAppSelector((state) => state.healthData.profile);
	const weightEntries = useAppSelector(
		(state) => state.healthData.weightEntries
	);

	useEffect(() => {
		document.title = 'Dashboard';
	}, []);

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
						<TypographyGutter
							title='h6'
							children='Bem-vindo ao EmagreçaJá!'
						/>
						<Typography
							variant='body1'
							sx={{ mb: 1 }}>
							Para começar a acompanhar seu progresso, você precisa configurar
							seu perfil e adicionar seu peso atual.
						</Typography>
						<Grid2
							container
							spacing={2}>
							<GridButton
								to='/dashboard/profile'
								variant='contained'
								color='primary'
								children='Configurar Perfil'
							/>
							<GridButton
								to='/dashboard/weight'
								variant='outlined'
								color='primary'
								children='Registrar Peso'
							/>
						</Grid2>
					</CardContent>
				</Card>
			) : (
				<>
					<Grid2
						container
						spacing={3}
						sx={{ mb: 4 }}>
						<CurrentWeight />

						<CurrentBMI />

						<WeightGoal />

						<Records />
					</Grid2>

					<Grid2
						container
						spacing={3}>
						<WeightEvolution />
						<QuickActions />
					</Grid2>
				</>
			)}
		</Box>
	);
};
