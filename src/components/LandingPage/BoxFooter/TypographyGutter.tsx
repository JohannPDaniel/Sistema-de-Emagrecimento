import { Typography } from '@mui/material';

interface TypographyGutterProps {
	children: React.ReactNode;
	title?: 'subtitle1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	align?: 'center' | 'right' | 'left' | 'inherit' | 'justify'; 
	color?: string;
	fontWeight?: 'bold';
	sx?: object; 
}

export const TypographyGutter = ({
	children,
	title,
	align,
	color,
	fontWeight,
	sx,
}: TypographyGutterProps) => {
	return (
		<Typography
			variant={title}
			align={align}
			color={color}
			fontWeight={fontWeight}
			sx={sx}
			gutterBottom>
			{children}
		</Typography>
	);
};
