import { Typography } from '@mui/material';

interface TypographyGutterProps {
	children: React.ReactNode;
	title?: 'subtitle1' | 'h6' | 'h3' | 'h2';
	align?: 'center';
}

export const TypographyGutter = ({
	children,
	title,
	align,
}: TypographyGutterProps) => {
	return (
		<Typography
			variant={title}
			align={align}
			gutterBottom>
			{children}
		</Typography>
	);
};
