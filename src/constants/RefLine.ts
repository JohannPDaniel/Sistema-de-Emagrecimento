import { LabelPosition } from "recharts/types/component/Label";

interface RefLineProps {
	numberY: number;
	stroke: string;
	strokeDasharray: string;
	label: {
		value: string;
		position: LabelPosition;
	};
}
export const RefLines: RefLineProps[] = [
	{
		numberY: 18.5,
		stroke: '#7ac3a7',
		strokeDasharray: '3 3',
		label: {
			value: 'Abaixo do Peso',
			position: 'insideTopLeft',
		},
	},
	{
		numberY: 24.9,
		stroke: '#f5c35a',
		strokeDasharray: '3 3',
		label: {
			value: 'Normal',
			position: 'insideTopLeft',
		},
	},
	{
		numberY: 29.9,
		stroke: '#e98b5c',
		strokeDasharray: '3 3',
		label: {
			value: 'Sobrepeso',
			position: 'insideTopLeft',
		},
	},
	{
		numberY: 35,
		stroke: '#d9534f',
		strokeDasharray: '3 3',
		label: {
			value: 'Obesidade',
			position: 'insideTopLeft',
		},
	},
];
