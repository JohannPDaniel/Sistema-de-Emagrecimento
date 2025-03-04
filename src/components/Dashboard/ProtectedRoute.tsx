import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../config/store/hooks';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
	children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

	return isAuthenticated ? (
		<>{children}</>
	) : (
		<Navigate
			to='/login'
			replace
		/>
	);
};
