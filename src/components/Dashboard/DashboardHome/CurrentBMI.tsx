import { Card, CardContent, Grid2, Typography } from '@mui/material';
import { useAppSelector } from '../../../config/store/hooks';
import {
	calculateBMI,
	getBMICategory,
} from '../../../utils/healthCalculations';
import { TypographyGutter } from '../../LandingPage/BoxFooter/TypographyGutter';

export const CurrentBMI = () => {
	const profile = useAppSelector((state) => state.healthData.profile);
	const weightEntries = useAppSelector(
		(state) => state.healthData.weightEntries
	);

	const latestEntry =
		weightEntries.length > 0 ? weightEntries[weightEntries.length - 1] : null;

	const currentBMI =
		profile && latestEntry
			? calculateBMI(latestEntry.weight, profile.height)
			: null;

	const bmiCategory = currentBMI ? getBMICategory(currentBMI) : null;

	return (
		<Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
			<Card>
				<CardContent>
					<TypographyGutter
						color='textSecondary'
						children='IMC Atual'
					/>
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
	);
};
