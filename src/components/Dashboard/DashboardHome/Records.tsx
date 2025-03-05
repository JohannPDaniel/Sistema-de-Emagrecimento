import { Grid2, Card, CardContent, Typography } from '@mui/material';
import { CustomTypography } from '../../LandingPage/BoxFooter/CustomTypography';
import { TypographyGutter } from '../../LandingPage/BoxFooter/TypographyGutter';
import { useAppSelector } from '../../../config/store/hooks';

export const Records = () => {
	const weightEntries = useAppSelector(
		(state) => state.healthData.weightEntries
	);

	return (
		<Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
			<Card>
				<CardContent>
					<TypographyGutter
						color='textSecondary'
						children='Registros'
					/>
					<Typography variant='h4'>{weightEntries.length}</Typography>
					<CustomTypography
						variant='body2'
						color='textSecondary'
						children='Total de medições'
					/>
				</CardContent>
			</Card>
		</Grid2>
	);
};
