import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard, LandingPage, Login } from '../../page';
import {
	DashboardHome,
	Profile,
	ProtectedRoute,
	WeightTracker,
} from '../../components/Dashboard';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/dashboard',
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		),
		children: [
			{ path: '', element: <DashboardHome /> },
			{ path: 'weight', element: <WeightTracker /> },
			{ path: 'profile', element: <Profile /> },
		],
	},
]);

function AppRoutes() {
	return <RouterProvider router={router} />;
}

export default AppRoutes;
