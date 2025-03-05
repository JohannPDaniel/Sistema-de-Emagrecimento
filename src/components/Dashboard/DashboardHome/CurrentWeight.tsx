import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { Grid2, Card, CardContent, Box, Typography } from '@mui/material';
import { TypographyGutter } from '../../LandingPage/BoxFooter/TypographyGutter';
import { useAppSelector } from '../../../config/store/hooks';

export const CurrentWeight = () => {
	const weightEntries = useAppSelector(
		(state) => state.healthData.weightEntries
	);

	const latestEntry =
        weightEntries.length > 0 ? weightEntries[ weightEntries.length - 1 ] : null;
    
	const previousEntry =
		weightEntries.length > 1 ? weightEntries[weightEntries.length - 2] : null;

	const weightChange =
		latestEntry && previousEntry
			? latestEntry.weight - previousEntry.weight
			: 0;

	return (
		<Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
			<Card>
				<CardContent>
					<TypographyGutter
						color='textSecondary'
						children='Peso Atual'
					/>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography variant='h4'>
							{latestEntry ? `${latestEntry.weight} kg` : 'N/A'}
						</Typography>
						{weightChange !== 0 && (
							<Box
								sx={{
									ml: 1,
									display: 'flex',
									alignItems: 'center',
									color: weightChange > 0 ? 'error.main' : 'success.main',
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
									latestEntry.date + 'T00:00:00'
							  ).toLocaleDateString('pt-BR', {
									timeZone: 'UTC',
							  })}`
							: ''}
					</Typography>
				</CardContent>
			</Card>
		</Grid2>
	);
};
