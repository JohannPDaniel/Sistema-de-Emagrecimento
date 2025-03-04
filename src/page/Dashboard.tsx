import {
	AccountCircle,
	Dashboard as DashboardIcon,
	Logout,
	Menu as MenuIcon,
	MonitorWeight,
} from '@mui/icons-material';
import {
	AppBar,
	Box,
	Button,
	Container,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Outlet,
	Link as RouterLink,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { useAppSelector } from '../config/store/hooks';
import { logout } from '../config/store/modules/authSlice';
import { hiddenAlert } from "../config/store/modules/alert";

export const Dashboard = () => {
	const theme = useTheme();
	const location = useLocation();

	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useAppSelector((state) => state.auth.user);

	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	const handleLogout = () => {
		dispatch(hiddenAlert()); 
		dispatch(logout());
		navigate('/');
	};


	const menuItems = [
		{ text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
		{ text: 'Peso e IMC', icon: <MonitorWeight />, path: '/dashboard/weight' },
		{ text: 'Perfil', icon: <AccountCircle />, path: '/dashboard/profile' },
	];

	const drawer = (
		<Box
			sx={{ width: 250 }}
			role='presentation'>
			<Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
				<Typography
					variant='h6'
					color='primary'
					fontWeight='bold'>
					EmagreçaJá
				</Typography>
			</Box>
			<List>
				{menuItems.map((item) => {
					const isActive = location.pathname === item.path;

					return (
						<ListItem
							key={item.text}
							disablePadding>
							<ListItemButton
								component={RouterLink}
								to={item.path}
								onClick={isMobile ? handleDrawerToggle : undefined}
								sx={{
									backgroundColor: isActive
										? 'rgba(0, 0, 0, 0.2)'
										: 'transparent',
								}}>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					);
				})}
				<ListItem disablePadding>
					<ListItemButton onClick={handleLogout}>
						<ListItemIcon>
							<Logout />
						</ListItemIcon>
						<ListItemText primary='Sair' />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar
				position='fixed'
				sx={{
					zIndex: (theme) => theme.zIndex.drawer + 1,
					backgroundColor: 'white',
					color: 'text.primary',
				}}>
				<Toolbar>
					{isMobile && (
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
					)}
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}>
						{isMobile ? 'EmagreçaJá' : `Olá, ${user?.name || 'Usuário'}`}
					</Typography>
					{!isMobile && (
						<Button
							color='inherit'
							onClick={handleLogout}
							startIcon={<Logout />}>
							Sair
						</Button>
					)}
				</Toolbar>
			</AppBar>

			{isMobile ? (
				<Drawer
					variant='temporary'
					open={drawerOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}>
					{drawer}
				</Drawer>
			) : (
				<Drawer
					variant='permanent'
					sx={{
						width: 250,
						flexShrink: 0,
						[`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' },
					}}
					open>
					<Toolbar />
					{drawer}
				</Drawer>
			)}

			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { md: `calc(100% - 250px)` },
					backgroundColor: theme.palette.grey[50],
					minHeight: '100vh',
				}}>
				<Toolbar />
				<Container
					maxWidth='lg'
					sx={{ mt: 2 }}>
					<Outlet />
				</Container>
			</Box>
		</Box>
	);
};
