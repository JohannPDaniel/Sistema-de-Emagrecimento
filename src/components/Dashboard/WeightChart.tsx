import { useTheme, useMediaQuery, Box } from '@mui/material';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from 'recharts';
import { WeightEntry } from '../../config/store/modules/healthDataSlice';

interface WeightChartProps {
	data: WeightEntry[];
}

export const WeightChart: React.FC<WeightChartProps> = ({ data }) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detecta telas pequenas

	// Formata os dados para o gráfico
	const chartData = data.map((entry) => ({
		date: new Date(entry.date + 'T00:00:00').toLocaleDateString('pt-BR', {
			timeZone: 'UTC',
		}),
		weight: entry.weight,
	}));

	return (
		<Box
			sx={{
				width: '100%',
				height: isSmallScreen ? 250 : 400,
				margin: 'auto',
			}}>
			<ResponsiveContainer
				width='100%'
				height='100%'>
				<LineChart
					data={chartData}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 20,
					}}>
					<CartesianGrid
						strokeDasharray='3 3'
						stroke={theme.palette.divider}
					/>
					<XAxis
						dataKey='date'
						tick={{
							fill: theme.palette.text.secondary,
							fontSize: isSmallScreen ? 10 : 12,
						}} // Fonte menor em telas pequenas
						stroke={theme.palette.divider}
					/>
					<YAxis
						label={{
							value: 'Peso (kg)',
							angle: -90,
							position: 'insideLeft',
							fill: theme.palette.text.secondary,
							fontSize: isSmallScreen ? 10 : 12, // Fonte menor em telas pequenas
						}}
						tick={{
							fill: theme.palette.text.secondary,
							fontSize: isSmallScreen ? 10 : 12,
						}}
						stroke={theme.palette.divider}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: theme.palette.background.paper,
							border: `1px solid ${theme.palette.divider}`,
						}}
					/>
					<Legend />
					<Line
						type='monotone'
						dataKey='weight'
						stroke={theme.palette.primary.main}
						strokeWidth={2}
						dot={{ r: isSmallScreen ? 3 : 4, fill: theme.palette.primary.main }} // Pontos menores em telas pequenas
						activeDot={{ r: isSmallScreen ? 5 : 6 }}
						name='Peso (kg)'
					/>
				</LineChart>
			</ResponsiveContainer>
		</Box>
	);
};
