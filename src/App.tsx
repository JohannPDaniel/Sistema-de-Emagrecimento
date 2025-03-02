import { ThemeProvider } from '@mui/material';
import { GlobalStyle } from './config/global/GlobalStyle';
import AppRoutes from './config/routes/AppRoutes';
import theme from './config/themes/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './config/store';

function App() {
	return (
		<Provider store={store}>
			<PersistGate
				loading={null}
				persistor={persistor}>
				<ThemeProvider theme={theme}>
					<AppRoutes />
					<GlobalStyle />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
