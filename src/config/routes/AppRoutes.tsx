import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from "../../page/LandingPage";
import { Login } from "../../page/Login";

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: '/login',
		element: <Login />,
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
