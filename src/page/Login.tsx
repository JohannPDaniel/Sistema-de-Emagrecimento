import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid2,
	Link,
	Stack,
	Tab,
	Tabs,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import pessoaFeliz from '../assets/pessoaFeliz.webp';
import { login, register } from '../config/store/modules/authSlice';
import { useAppSelector } from '../config/store/hooks';
import SnackbarAlert from '../components/SnackBarAlert';
import { showAlert } from '../config/store/modules/alert';

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
			id={`auth-tabpanel-${index}`}
			aria-labelledby={`auth-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
		</div>
	);
}

export const Login = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const users = useAppSelector((state) => state.auth.users);
	const navigate = useNavigate();
	const [tabValue, setTabValue] = useState(0);

	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const [registerName, setRegisterName] = useState('');
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

	const handleTabChange = (_: unknown, newValue: number) => {
		setTabValue(newValue);
	};

	const handleLogin = (e: React.FormEvent<HTMLElement>) => {
		e.preventDefault();

		const user = users.find(
			(u) => u.email === loginEmail && u.password === loginPassword
		);

		if (!user) {
			dispatch(
				showAlert({
					message: 'Email ou senha inválidos',
					type: 'error',
				})
			);
			return;
		}

		dispatch(
			showAlert({
				message: 'Login efetuado com sucesso!',
				type: 'success',
			})
		);

		dispatch(login({ email: loginEmail, password: loginPassword }));

		setTimeout(() => {
			navigate('/dashboard');
		}, 2000);
	};

	const handleRegister = (e: React.FormEvent<HTMLElement>) => {
		e.preventDefault();

		const newUser = {
			id: crypto.randomUUID(),
			name: registerName,
			email: registerEmail,
			password: registerPassword,
		};

		dispatch(register(newUser));

		dispatch(
			showAlert({
				message: 'Cadastro realizado com sucesso!',
				type: 'success',
			})
		);

		setTabValue(0);
	};
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
				py: 4,
			}}>
			<Container maxWidth='md'>
				<Grid2
					container
					spacing={2}
					alignItems='stretch'>
					<Grid2 size={{ xs: 12, sm: 6 }}>
						<Box
							sx={{
								height: '100%',
								display: { xs: 'none', sm: 'flex' },
								flexDirection: 'column',
								justifyContent: 'center',
								color: 'white',
								p: 4,
							}}>
							<Typography
								variant='h3'
								component='h1'
								gutterBottom
								fontWeight='bold'>
								EmagreçaJá
							</Typography>
							<Typography
								variant='h5'
								gutterBottom>
								Sua jornada para uma vida mais saudável começa aqui
							</Typography>
							<Typography variant='body1'>
								Acompanhe seu progresso, visualize resultados e alcance suas
								metas de emagrecimento com nossa plataforma intuitiva.
							</Typography>
							<Box
								component='img'
								src={pessoaFeliz}
								alt='Pessoa feliz após perder peso'
								sx={{
									maxWidth: '100%',
									height: 'auto',
									borderRadius: 4,
									mt: 2,
									boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
								}}
							/>
						</Box>
					</Grid2>
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

								<TabPanel
									value={tabValue}
									index={0}>
									<form onSubmit={handleLogin}>
										<Stack spacing={3}>
											<TextField
												label='Email'
												type='email'
												fullWidth
												required
												value={loginEmail}
												onChange={(e) => setLoginEmail(e.target.value)}
											/>
											<TextField
												label='Senha'
												type='password'
												fullWidth
												required
												value={loginPassword}
												onChange={(e) => setLoginPassword(e.target.value)}
											/>
											<Link
												component='button'
												type='button'
												variant='body2'
												sx={{ alignSelf: 'flex-end' }}>
												Esqueceu sua senha?
											</Link>
											<Button
												type='submit'
												variant='contained'
												color='primary'
												size='large'
												fullWidth>
												Entrar
											</Button>
											<Typography
												variant='body2'
												align='center'>
												Não tem uma conta?{' '}
												<Link
													component='button'
													type='button'
													onClick={() => setTabValue(1)}>
													Cadastre-se
												</Link>
											</Typography>
										</Stack>
									</form>
								</TabPanel>

								<TabPanel
									value={tabValue}
									index={1}>
									<form onSubmit={handleRegister}>
										<Stack spacing={3}>
											<TextField
												label='Nome Completo'
												fullWidth
												required
												value={registerName}
												onChange={(e) => setRegisterName(e.target.value)}
											/>
											<TextField
												label='Email'
												type='email'
												fullWidth
												required
												value={registerEmail}
												onChange={(e) => setRegisterEmail(e.target.value)}
											/>
											<TextField
												label='Senha'
												type='password'
												fullWidth
												required
												value={registerPassword}
												onChange={(e) => setRegisterPassword(e.target.value)}
											/>
											<TextField
												label='Confirmar Senha'
												type='password'
												fullWidth
												required
												value={registerConfirmPassword}
												onChange={(e) =>
													setRegisterConfirmPassword(e.target.value)
												}
												error={
													registerPassword !== registerConfirmPassword &&
													registerConfirmPassword !== ''
												}
												helperText={
													registerPassword !== registerConfirmPassword &&
													registerConfirmPassword !== ''
														? 'As senhas não coincidem'
														: ''
												}
											/>
											<Button
												type='submit'
												variant='contained'
												color='primary'
												size='large'
												fullWidth
												disabled={registerPassword !== registerConfirmPassword}>
												Cadastrar
											</Button>
											<Typography
												variant='body2'
												align='center'>
												Já tem uma conta?{' '}
												<Link
													component='button'
													type='button'
													onClick={() => setTabValue(0)}>
													Faça login
												</Link>
											</Typography>
										</Stack>
									</form>
								</TabPanel>
							</CardContent>
						</Card>
					</Grid2>
				</Grid2>
			</Container>

			<SnackbarAlert />
		</Box>
	);
};
