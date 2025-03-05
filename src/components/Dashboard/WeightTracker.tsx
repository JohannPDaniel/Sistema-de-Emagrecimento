import { Add, Delete, Edit } from '@mui/icons-material';
import {
	Box,
	Button,
	Card,
	CardContent,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid2,
	IconButton,
	Paper,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tabs,
	TextField,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../config/store/hooks';
import {
	addWeightEntry,
	deleteWeightEntry,
	updateWeightEntry,
	WeightEntry,
} from '../../config/store/modules/healthDataSlice';
import { calculateBMI } from '../../utils/healthCalculations';
import { WeightChart } from './WeightChart';
import { showAlert } from '../../config/store/modules/alert';
import SnackbarAlert from "../SnackBarAlert";
import { BMIChart } from "./BMIChart";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`weight-tabpanel-${index}`}
			aria-labelledby={`weight-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
		</div>
	);
}

export const WeightTracker = () => {
	const dispatch = useDispatch();
	const profile = useAppSelector((state) => state.healthData.profile);
	const weightEntries = useAppSelector(
		(state) => state.healthData.weightEntries
	);

	const [tabValue, setTabValue] = useState(0);
	const [openDialog, setOpenDialog] = useState(false);
	const [editingEntry, setEditingEntry] = useState<WeightEntry | null>(null);
	const [entryDate, setEntryDate] = useState(
		new Date().toISOString().split('T')[0]
	);
	const [entryWeight, setEntryWeight] = useState('');

	const handleTabChange = (_: unknown, newValue: number) => {
		setTabValue(newValue);
	};

	const handleOpenDialog = (entry?: WeightEntry) => {
		if (entry) {
			setEditingEntry(entry);
			setEntryDate(entry.date);
			setEntryWeight(entry.weight.toString());
		} else {
			setEditingEntry(null);
			setEntryDate(new Date().toISOString().split('T')[0]);
			setEntryWeight('');
		}
		setOpenDialog(true);
	};

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	const handleSaveEntry = () => {
		if (!entryDate || !entryWeight) return;

		const weight = Number.parseFloat(entryWeight);
		if (isNaN(weight)) return;

		if (editingEntry) {
			dispatch(updateWeightEntry({ date: entryDate, weight }));
		} else {
			dispatch(addWeightEntry({ date: entryDate, weight }));
		}

		dispatch(
			showAlert({
				message: 'Registro criado com sucesso!',
				type: 'success',
			})
		);

		handleCloseDialog();
	};

	const handleDeleteEntry = (date: string) => {
		dispatch(deleteWeightEntry(date));
	};

	const bmiData = weightEntries.map((entry) => ({
		date: entry.date,
		bmi: profile ? calculateBMI(entry.weight, profile.height) : 0,
	} ) );
	
	useEffect( () => {
		document.title = 'Acompanhamento de Peso e IMC';
	}, [])

	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					mb: 3,
				}}>
				<Typography variant='h4'>Acompanhamento de Peso e IMC</Typography>
				<Button
					variant='contained'
					color='primary'
					startIcon={<Add />}
					onClick={() => handleOpenDialog()}>
					Adicionar Registro
				</Button>
			</Box>

			<Card sx={{ mb: 4 }}>
				<CardContent>
					<Tabs
						value={tabValue}
						onChange={handleTabChange}
						centered>
						<Tab label='Gráfico de Peso' />
						<Tab label='Gráfico de IMC' />
						<Tab label='Histórico' />
					</Tabs>

					<TabPanel
						value={tabValue}
						index={0}>
						<Box sx={{ height: 400 }}>
							{weightEntries.length > 0 ? (
								<WeightChart data={weightEntries} />
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
										Sem dados para exibir. Adicione seu primeiro registro de
										peso.
									</Typography>
								</Box>
							)}
						</Box>
					</TabPanel>

					<TabPanel
						value={tabValue}
						index={1}>
						<Box sx={{ height: 400 }}>
							{profile && weightEntries.length > 0 ? (
								<BMIChart data={bmiData} />
							) : (
								<Box
									sx={{
										height: '100%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										flexDirection: 'column',
										gap: 2,
									}}>
									<Typography
										variant='body1'
										color='textSecondary'>
										{!profile
											? 'Configure seu perfil para visualizar o gráfico de IMC.'
											: 'Sem dados para exibir. Adicione seu primeiro registro de peso.'}
									</Typography>
									{!profile && (
										<Button
											variant='contained'
											color='primary'
											component='a'
											href='/dashboard/profile'>
											Configurar Perfil
										</Button>
									)}
								</Box>
							)}
						</Box>
					</TabPanel>

					<TabPanel
						value={tabValue}
						index={2}>
						{weightEntries.length > 0 ? (
							<TableContainer component={Paper}>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Data</TableCell>
											<TableCell>Peso (kg)</TableCell>
											<TableCell>IMC</TableCell>
											<TableCell align='right'>Ações</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{[...weightEntries].reverse().map((entry) => (
											<TableRow key={entry.date}>
												<TableCell>
													{new Date(
														entry.date + 'T00:00:00'
													).toLocaleDateString('pt-BR', {
														timeZone: 'UTC',
													})}
												</TableCell>

												<TableCell>{entry.weight} kg</TableCell>
												<TableCell>
													{profile
														? calculateBMI(
																entry.weight,
																profile.height
														  ).toFixed(1)
														: 'N/A'}
												</TableCell>
												<TableCell align='right'>
													<IconButton
														size='small'
														color='primary'
														onClick={() => handleOpenDialog(entry)}>
														<Edit fontSize='small' />
													</IconButton>
													<IconButton
														size='small'
														color='error'
														onClick={() => handleDeleteEntry(entry.date)}>
														<Delete fontSize='small' />
													</IconButton>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						) : (
							<Box
								sx={{
									py: 4,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<Typography
									variant='body1'
									color='textSecondary'>
									Sem registros de peso. Adicione seu primeiro registro.
								</Typography>
							</Box>
						)}
					</TabPanel>
				</CardContent>
			</Card>

			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}>
				<DialogTitle>
					{editingEntry ? 'Editar Registro de Peso' : 'Novo Registro de Peso'}
				</DialogTitle>
				<DialogContent>
					<Grid2
						container
						spacing={2}
						sx={{ mt: 1 }}>
						<Grid2 size={{ xs: 12 }}>
							<TextField
								label='Data'
								type='date'
								fullWidth
								value={entryDate}
								onChange={(e) => setEntryDate(e.target.value)}
								InputLabelProps={{ shrink: true }}
							/>
						</Grid2>
						<Grid2 size={{ xs: 12 }}>
							<TextField
								label='Peso (kg)'
								type='number'
								fullWidth
								value={entryWeight}
								onChange={(e) => setEntryWeight(e.target.value)}
								InputProps={{ inputProps: { min: 0, step: 0.1 } }}
							/>
						</Grid2>
					</Grid2>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Cancelar</Button>
					<Button
						onClick={handleSaveEntry}
						variant='contained'
						color='primary'>
						Salvar
					</Button>
				</DialogActions>
			</Dialog>
			<SnackbarAlert />
		</Box>
	);
};
