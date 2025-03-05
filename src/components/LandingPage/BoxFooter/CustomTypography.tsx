import { Typography } from '@mui/material';

interface CustomTypographyProps {
	variant?: 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	align?: 'center' | 'right' | 'left' | 'inherit' | 'justify';
	color?: string;
	children?: React.ReactNode;
	sx?: object;
}

export const CustomTypography = ({
	variant,
	color,
	children,
	align,
	sx,
}: CustomTypographyProps) => {
	return (
		<Typography
			variant={variant}
			color={color}
			align={align}
			sx={sx}>
			{children}
		</Typography>
	);
};
