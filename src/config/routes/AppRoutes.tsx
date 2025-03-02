import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from "../../page/LandingPage";

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
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
