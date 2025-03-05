import { Typography } from '@mui/material';

interface CustomTypographyProps {
	variant?: 'body1' | "body2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
