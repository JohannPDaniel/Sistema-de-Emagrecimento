import { BarChart, MonitorWeight, Speed, Timeline } from '@mui/icons-material';

export const features = [
	{
		icon: (
			<MonitorWeight
				fontSize='large'
				color='primary'
			/>
		),
		title: 'Acompanhamento de Peso',
		description:
			'Registre seu peso diariamente e acompanhe sua evolução com gráficos detalhados.',
	},
	{
		icon: (
			<BarChart
				fontSize='large'
				color='primary'
			/>
		),
		title: 'Cálculo de IMC',
		description:
			'Monitore seu Índice de Massa Corporal e entenda o que ele significa para sua saúde.',
	},
	{
		icon: (
			<Timeline
				fontSize='large'
				color='primary'
			/>
		),
		title: 'Gráficos de Progresso',
		description:
			'Visualize seu progresso ao longo do tempo com gráficos interativos e fáceis de entender.',
	},
	{
		icon: (
			<Speed
				fontSize='large'
				color='primary'
			/>
		),
		title: 'Metas Personalizadas',
		description:
			'Defina metas realistas e acompanhe seu progresso rumo ao seu peso ideal.',
	},
];
