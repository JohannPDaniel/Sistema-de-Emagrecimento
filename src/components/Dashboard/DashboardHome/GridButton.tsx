import { Button, ButtonProps, Grid2 } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface GridButtonProps {
	to: string;
	variant?: NonNullable<ButtonProps['variant']>;
	color?: NonNullable<ButtonProps['color']>; 
	children?: React.ReactNode;
	fullWidth?: boolean;
	size?: ButtonProps['size'];
	sx?: ButtonProps['sx'];
}

export const GridButton = ({
	to,
	variant,
	color,
	children,
	fullWidth = false,
	size = 'medium',
	sx,
}: GridButtonProps) => {
	return (
		<Grid2>
			<Button
				component={RouterLink}
				to={to}
				variant={variant}
				color={color}
				fullWidth={fullWidth}
				size={size}
				sx={sx}>
				{children}
			</Button>
		</Grid2>
	);
};
