import { Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../config/store/hooks';
import { showAlert } from '../../config/store/modules/alert';
import { login } from '../../config/store/modules/authSlice';
import { TabPanel } from './TabPanel';

interface TabSignInProps {
	tabValue: number;
	setTabValue: (value: number) => void;
}

export const TabSignIn = ({ tabValue, setTabValue }: TabSignInProps) => {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const users = useAppSelector((state) => state.auth.users);

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
		}, 3000);
	};

	return (
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
	);
};
