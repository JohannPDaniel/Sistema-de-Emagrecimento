import {
	AccountCircle,
	Dashboard as DashboardIcon,
	MonitorWeight,
} from '@mui/icons-material';

export const menuItems = [
	{ text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
	{ text: 'Peso e IMC', icon: <MonitorWeight />, path: '/dashboard/weight' },
	{ text: 'Perfil', icon: <AccountCircle />, path: '/dashboard/profile' },
];
