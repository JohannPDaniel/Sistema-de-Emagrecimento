import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <h1>Olá mundo</h1>,
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
