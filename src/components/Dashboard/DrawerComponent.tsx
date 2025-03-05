import { Logout } from '@mui/icons-material';
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../config/store/hooks';
import { hiddenAlert } from '../../config/store/modules/alert';
import { logout } from '../../config/store/modules/authSlice';
import theme from '../../config/themes/theme';
import { menuItems } from '../../constants/menuItems';

export const DrawerComponent = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
};
