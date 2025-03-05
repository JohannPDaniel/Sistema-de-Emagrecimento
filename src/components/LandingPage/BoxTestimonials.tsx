import {
	Box,
	Container,
	Typography,
	Grid2,
	Card,
	CardContent,
	Divider,
} from '@mui/material';
import { testimonials } from '../../constants/testimonials';
import { TypographyGutter } from "./BoxFooter/TypographyGutter";

export const BoxTestimonials = () => {
	return (
		<Box sx={{ py: 10 }}>
			<Container>
				<TypographyGutter
					title='h3'
					align='center'
					children='Histórias de Sucesso'
				/>
				<Typography
					variant='h6'
					align='center'
					color='textSecondary'
					sx={{ mb: 6 }}>
					Veja o que nossos usuários estão dizendo
				</Typography>

				<Grid2
					container
					spacing={4}>
					{testimonials.map((testimonial, index) => (
						<Grid2
							size={{ xs: 12, md: 4 }}
							key={index}>
							<Card sx={{ height: '100%' }}>
								<CardContent>
									<Typography
										variant='body1'
										sx={{ fontStyle: 'italic' }}>
										"{testimonial.text}"
									</Typography>
									<Divider sx={{ my: 2 }} />
									<Typography
										variant='subtitle1'
										fontWeight='bold'>
										{testimonial.name}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'>
										{testimonial.role}
									</Typography>
								</CardContent>
							</Card>
						</Grid2>
					))}
				</Grid2>
			</Container>
		</Box>
	);
};
