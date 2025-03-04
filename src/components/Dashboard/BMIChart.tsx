import { useTheme } from '@mui/material';
import type React from 'react';
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

interface BMIData {
	date: string;
	bmi: number;
}

interface BMIChartProps {
	data: BMIData[];
}

export const BMIChart: React.FC<BMIChartProps> = ({ data }) => {
	const theme = useTheme();

	const chartData = data.map((entry) => ({
		date: new Date(entry.date + 'T00:00:00').toLocaleDateString('pt-BR', {
			timeZone: 'UTC',
		}),
		bmi: entry.bmi,
	}));

	return (
		<ResponsiveContainer
			width='95%'
			height={400}>
			<LineChart
				data={chartData}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 30,
				}}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis
					dataKey='date'
					tick={{ fontSize: 12 }}
				/>
				<YAxis
					label={{ value: 'IMC', angle: -90, position: 'insideLeft' }}
					tick={{ fontSize: 12 }}
					domain={[15, 40]}
					ticks={[15, 18.5, 24.9, 29.9, 35, 40]}
				/>
				<Tooltip />
				<Legend />

				{/* Reference lines for BMI categories */}
				<ReferenceLine
					y={18.5}
					stroke='#7ac3a7'
					strokeDasharray='3 3'
					label={{ value: 'Abaixo do Peso', position: 'insideTopLeft' }}
				/>
				<ReferenceLine
					y={24.9}
					stroke='#f5c35a'
					strokeDasharray='3 3'
					label={{ value: 'Normal', position: 'insideTopLeft' }}
				/>
				<ReferenceLine
					y={29.9}
					stroke='#e98b5c'
					strokeDasharray='3 3'
					label={{ value: 'Sobrepeso', position: 'insideTopLeft' }}
				/>
				<ReferenceLine
					y={35}
					stroke='#d9534f'
					strokeDasharray='3 3'
					label={{ value: 'Obesidade', position: 'insideTopLeft' }}
				/>

				<Line
					type='monotone'
					dataKey='bmi'
					stroke={theme.palette.secondary.main}
					strokeWidth={3}
					dot={{ r: 5 }}
					activeDot={{ r: 7 }}
					name='IMC'
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};
