import { Logout, Menu as MenuIcon } from '@mui/icons-material';
import {
	AppBar,
	Box,
	Button,
	Container,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { DrawerComponent } from '../components/Dashboard/DrawerComponent';
import { useAppSelector } from '../config/store/hooks';
import { hiddenAlert } from '../config/store/modules/alert';
import { logout } from '../config/store/modules/authSlice';

export const Dashboard = () => {
	const theme = useTheme();

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
					{<DrawerComponent />}
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
					{<DrawerComponent />}
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
