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

const BMIChart: React.FC<BMIChartProps> = ({ data }) => {
	const theme = useTheme();

	// Format data for the chart
	const chartData = data.map((entry) => ({
		date: new Date(entry.date).toLocaleDateString(),
		bmi: entry.bmi,
	}));

	return (
		<ResponsiveContainer
			width='100%'
			height='100%'>
			<LineChart
				data={chartData}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis
					dataKey='date'
					tick={{ fontSize: 12 }}
				/>
				<YAxis
					label={{ value: 'IMC', angle: -90, position: 'insideLeft' }}
					tick={{ fontSize: 12 }}
					domain={[15, 35]}
				/>
				<Tooltip />
				<Legend />

				{/* Reference lines for BMI categories */}
				<ReferenceLine
					y={18.5}
					stroke='#82ca9d'
					strokeDasharray='3 3'
					label={{ value: 'Abaixo do Peso', position: 'insideTopLeft' }}
				/>
				<ReferenceLine
					y={24.9}
					stroke='#ffc658'
					strokeDasharray='3 3'
					label={{ value: 'Normal', position: 'insideTopLeft' }}
				/>
				<ReferenceLine
					y={29.9}
					stroke='#ff8042'
					strokeDasharray='3 3'
					label={{ value: 'Sobrepeso', position: 'insideTopLeft' }}
				/>

				<Line
					type='monotone'
					dataKey='bmi'
					stroke={theme.palette.secondary.main}
					strokeWidth={2}
					dot={{ r: 4 }}
					activeDot={{ r: 6 }}
					name='IMC'
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default BMIChart;
