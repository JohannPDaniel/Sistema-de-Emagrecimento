import { ArrowBack } from '@mui/icons-material';
import {
	Box,
	Button,
	Card,
	CardContent,
	Grid2,
	Tab,
	Tabs,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TabSignIn } from './TabSignIn';
import { TabSignUp } from './TabSignUp';

export const AuthTabs = () => {
	const navigate = useNavigate();
	const [tabValue, setTabValue] = useState(0);
	const handleTabChange = (_: unknown, newValue: number) => {
		setTabValue(newValue);
	};

	return (
		<Grid2 size={{ xs: 12, sm: 6 }}>
			<Card sx={{ height: '100%' }}>
				<CardContent sx={{ p: 4 }}>
					<Tabs
						value={tabValue}
						onChange={handleTabChange}
						centered
						sx={{ mb: 2 }}>
						<Tab label='Login' />
						<Tab label='Cadastro' />
					</Tabs>

					<TabSignIn
						tabValue={tabValue}
						setTabValue={setTabValue}
					/>
					<TabSignUp
						tabValue={tabValue}
						setTabValue={setTabValue}
					/>

					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							mt: 2,
						}}>
						<Button
							startIcon={<ArrowBack />}
							onClick={() => navigate('/')}
							variant='outlined'
							color='secondary'>
							Voltar para Home
						</Button>
					</Box>
				</CardContent>
			</Card>
		</Grid2>
	);
};
