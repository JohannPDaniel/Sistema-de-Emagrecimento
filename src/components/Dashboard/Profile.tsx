import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid2,
	Radio,
	RadioGroup,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import { Save } from '@mui/icons-material';
import { useAppSelector } from '../../config/store/hooks';
import {
	setProfile,
	UserProfile,
} from '../../config/store/modules/healthDataSlice';
import { showAlert } from '../../config/store/modules/alert';
import SnackbarAlert from '../SnackBarAlert';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const profile = useAppSelector((state) => state.healthData.profile);

	const [height, setHeight] = useState(profile?.height || 0);
	const [age, setAge] = useState(profile?.age || 0);
	const [gender, setGender] = useState<'male' | 'female' | 'other'>(
		profile?.gender || 'other'
	);
	const [goal, setGoal] = useState(profile?.goal || 0);

	useEffect( () => {
		document.title = "Perfil";
		
		if (profile) {
			setHeight(profile.height);
			setAge(profile.age);
			setGender(profile.gender);
			setGoal(profile.goal);
		}
	}, [profile]);

	const handleSaveProfile = () => {
		const newProfile: UserProfile = {
			height,
			age,
			gender,
			goal,
		};

		dispatch(setProfile(newProfile));

		dispatch(
			showAlert({
				message: 'Perfil salvo com sucesso!',
				type: 'success',
			})
		);

		setTimeout(() => {
			navigate('/dashboard/weight');
		}, 3000);
	};
	return (
		<Box>
			<Typography
				variant='h4'
				gutterBottom
				sx={{ color: theme.palette.primary.main }}>
				Perfil
			</Typography>

			<Card
				sx={{
					backgroundColor: theme.palette.background.paper,
					boxShadow: theme.shadows[3],
				}}>
				<CardContent>
					<Typography
						variant='h6'
						gutterBottom>
						Informações Pessoais
					</Typography>
					<Divider
						sx={{ mb: 3, backgroundColor: theme.palette.primary.light }}
					/>

					<Grid2
						container
						spacing={3}>
						<Grid2 size={{ xs: 12, md: 6 }}>
							<TextField
								label='Altura (cm)'
								type='number'
								fullWidth
								value={height || ''}
								onChange={(e) => setHeight(Number.parseFloat(e.target.value))}
								InputProps={{ inputProps: { min: 0, step: 1 } }}
							/>
						</Grid2>

						<Grid2 size={{ xs: 12, md: 6 }}>
							<TextField
								label='Idade'
								type='number'
								fullWidth
								value={age || ''}
								onChange={(e) => setAge(Number.parseInt(e.target.value))}
								InputProps={{ inputProps: { min: 0, step: 1 } }}
							/>
						</Grid2>

						<Grid2 size={{ xs: 12, md: 6 }}>
							<FormControl>
								<FormLabel>Gênero</FormLabel>
								<RadioGroup
									row
									value={gender}
									onChange={(e) =>
										setGender(e.target.value as 'male' | 'female' | 'other')
									}>
									<FormControlLabel
										value='male'
										control={<Radio />}
										label='Masculino'
									/>
									<FormControlLabel
										value='female'
										control={<Radio />}
										label='Feminino'
									/>
									<FormControlLabel
										value='other'
										control={<Radio />}
										label='Outro'
									/>
								</RadioGroup>
							</FormControl>
						</Grid2>

						<Grid2 size={{ xs: 12, md: 6 }}>
							<TextField
								label='Meta de Peso (kg)'
								type='number'
								fullWidth
								value={goal || ''}
								onChange={(e) => setGoal(Number.parseFloat(e.target.value))}
								InputProps={{ inputProps: { min: 0, step: 0.1 } }}
								helperText='Defina seu peso ideal como meta'
							/>
						</Grid2>

						<Grid2 size={{ xs: 12 }}>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'flex-end',
									mt: theme.spacing(2),
								}}>
								<Button
									variant='contained'
									sx={{
										backgroundColor: theme.palette.primary.main,
										'&:hover': { backgroundColor: theme.palette.primary.dark },
									}}
									startIcon={<Save />}
									onClick={handleSaveProfile}>
									Salvar Perfil
								</Button>
							</Box>
						</Grid2>
					</Grid2>
				</CardContent>
			</Card>
			<SnackbarAlert />
		</Box>
	);
};
