import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#4CAF50',
			light: '#81C784',
			dark: '#388E3C',
		},
		secondary: {
			main: '#FF9800',
			light: '#FFB74D',
			dark: '#F57C00',
		},
		background: {
			default: '#F5F5F5',
			paper: '#FFFFFF',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontWeight: 700,
		},
		h2: {
			fontWeight: 600,
		},
		h3: {
			fontWeight: 600,
		},
		button: {
			textTransform: 'none',
			fontWeight: 600,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					padding: '10px 24px',
				},
				containedPrimary: {
					'&:hover': {
						backgroundColor: '#388E3C',
					},
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
				},
			},
		},
	},
});

export default theme;
