import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../config/store/hooks';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
	children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
	const user = useAppSelector((state) => state.auth.user);

	// Se o estado de autenticação for indefinido, retorna um loader temporário
	if (isAuthenticated === undefined) {
		return <div>Carregando...</div>;
	}

	// Se não estiver autenticado ou sem usuário, redireciona para login
	return isAuthenticated && user ? (
		<>{children}</>
	) : (
		<Navigate
			to='/login'
			replace
		/>
	);
};
