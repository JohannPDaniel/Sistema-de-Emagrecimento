import { Card, CardContent, Grid2, Typography } from '@mui/material';
import { useAppSelector } from '../../../config/store/hooks';
import { TypographyGutter } from '../../LandingPage/BoxFooter/TypographyGutter';

export const WeightGoal = () => {
    const profile = useAppSelector( ( state ) => state.healthData.profile );
    
	const weightEntries = useAppSelector(
		(state) => state.healthData.weightEntries
	);

	const latestEntry =
		weightEntries.length > 0 ? weightEntries[weightEntries.length - 1] : null;

	return (
		<Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
			<Card>
				<CardContent>
					<TypographyGutter
						color='textSecondary'
						children='Meta de Peso'
					/>
					<Typography variant='h4'>
						{profile ? `${profile.goal} kg` : 'N/A'}
					</Typography>
					{profile && latestEntry && (
						<Typography
							variant='body2'
							color='textSecondary'>
							{latestEntry.weight > profile.goal
								? `Faltam ${(latestEntry.weight - profile.goal).toFixed(1)} kg`
								: 'Meta atingida!'}
						</Typography>
					)}
				</CardContent>
			</Card>
		</Grid2>
	);
};
