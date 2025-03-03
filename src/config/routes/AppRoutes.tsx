import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from "../../page/LandingPage";
import { Login } from "../../page/Login";
import { Dashboard } from "../../page/Dashboard";

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
		element: <Dashboard />,
	},
]);

function AppRoutes() {
	return (
		<RouterProvider
			key={Date.now()}
			router={router}
		/>
	);
}

export default AppRoutes;
