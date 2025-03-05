import { Typography } from '@mui/material';

interface TypographyGutterProps {
	children: React.ReactNode;
	title?: 'subtitle1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	align?: 'center';
	color?: string
}

export const TypographyGutter = ({
	children,
	title,
	align,
	color
}: TypographyGutterProps) => {
	return (
		<Typography
			variant={title}
			align={ align }
			color={color}
			gutterBottom>
			{children}
		</Typography>
	);
};
