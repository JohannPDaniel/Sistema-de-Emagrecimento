import { Typography } from '@mui/material';

interface CustomTypographyProps {
	variant?: 'body2' | "h5";
	color?: string;
	children?: React.ReactNode;
}

export const CustomTypography = ({
	variant,
	color,
	children,
}: CustomTypographyProps) => {
	return (
		<Typography
			variant={variant}
			color={color}>
			{children}
		</Typography>
	);
};
