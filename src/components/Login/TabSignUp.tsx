import { Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../config/store/hooks';
import { showAlert } from '../../config/store/modules/alert';
import { register } from '../../config/store/modules/authSlice';
import { TabPanel } from './TabPanel';

interface TabSignUpProps {
	tabValue: number;
	setTabValue: (value: number) => void;
}

export const TabSignUp = ({ tabValue, setTabValue }: TabSignUpProps) => {
	const dispatch = useAppDispatch();
	const [registerName, setRegisterName] = useState('');
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

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
						onChange={(e) => setRegisterConfirmPassword(e.target.value)}
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
	);
};
