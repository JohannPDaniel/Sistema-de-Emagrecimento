import { useTheme, useMediaQuery, Box } from '@mui/material';
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
import { RefLines } from '../../constants/RefLine';

interface BMIData {
	date: string;
	bmi: number;
}

interface BMIChartProps {
	data: BMIData[];
}

export const BMIChart: React.FC<BMIChartProps> = ({ data }) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const chartData = data.map((entry) => ({
		date: new Date(entry.date + 'T00:00:00').toLocaleDateString('pt-BR', {
			timeZone: 'UTC',
		}),
		bmi: entry.bmi,
	}));

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				minWidth: isSmallScreen ? '100%' : 500,
				height: isSmallScreen ? 250 : 350,
				margin: '0 auto',
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
						bottom: 30,
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis
						dataKey='date'
						tick={{ fontSize: isSmallScreen ? 10 : 12 }}
					/>
					<YAxis
						label={{ value: 'IMC', angle: -90, position: 'insideLeft' }}
						tick={{ fontSize: isSmallScreen ? 10 : 12 }}
						domain={[15, 40]}
						ticks={[15, 18.5, 24.9, 29.9, 35, 40]}
					/>
					<Tooltip />
					<Legend />
					{RefLines.map((rl, index) => (
						<ReferenceLine
							key={index}
							y={rl.numberY}
							stroke={rl.stroke}
							strokeDasharray={rl.strokeDasharray}
							label={{
								value: rl.label.value,
								position: rl.label.position,
								style: { fontSize: isSmallScreen ? 10 : 14 }, // Ajusta o tamanho do texto
							}}
						/>
					))}
					<Line
						type='monotone'
						dataKey='bmi'
						stroke={theme.palette.secondary.main}
						strokeWidth={2.5}
						dot={{ r: isSmallScreen ? 3 : 5 }}
						activeDot={{ r: isSmallScreen ? 5 : 7 }}
						name='IMC'
					/>
				</LineChart>
			</ResponsiveContainer>
		</Box>
	);
};
