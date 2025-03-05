import { MonitorWeight } from '@mui/icons-material';
import { Grid2, Card, CardContent, Box, Button } from '@mui/material';
import { TypographyGutter } from '../../LandingPage/BoxFooter/TypographyGutter';
import { Link as RouterLink } from 'react-router-dom';

export const QuickActions = () => {
	return (
		<Grid2 size={{ xs: 12, md: 4 }}>
			<Card sx={{ height: '100%' }}>
				<CardContent>
					<TypographyGutter
						title='h6'
						children='Ações Rápidas'
					/>
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
	);
};
