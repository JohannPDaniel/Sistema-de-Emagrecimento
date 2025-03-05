import { Typography } from '@mui/material';

interface TypographyGutterProps {
	children: React.ReactNode;
	title?: 'subtitle1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	align?: 'center';
	color?: string;
	fontWeight?: "bold"
}

export const TypographyGutter = ({
	children,
	title,
	align,
	color,
	fontWeight,
}: TypographyGutterProps) => {
	return (
		<Typography
			variant={title}
			align={align}
			color={color}
			fontWeight={fontWeight}
			gutterBottom>
			{children}
		</Typography>
	);
};
