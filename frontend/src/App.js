import React from 'react';
import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

import './App.css';

function App() {
	const [ chartData, setChartData ] = useState([])
	const [ ultimoCaixa, setUltimoCaixa ] = useState(0)
	const [ ultimoCisterna, setUltimoCisterna ] = useState(0)

	const loadData = (data) => {
		let dadosList = [['Data/Hora', 'Caixa', 'Cisterna']]

		for (const valor of data) {
			let dados = [valor.created_at, valor.caixa, valor.cisterna]
			dadosList.push(dados)
		}
		setUltimoCaixa(dadosList[dadosList.length-1][1])
		setUltimoCisterna(dadosList[dadosList.length-1][2])
		return dadosList
	}

	useEffect(() => {
		fetch("http://localhost:8000/dados/")
		.then(res => res.json())
		.then(res => setChartData(loadData(res.dados)))
	}, [])

	return (
		<div className="App">
			<div className='container'>
				<h1>Sistema de Monitoramento Web</h1>
				<div className='grid-div'>
					<div className='box'>
						<p>Nível da Caixa</p>
						<p className='number'>{ultimoCaixa}%</p>
					</div>
					<div className='box'>
						<p>Nível da Cisterna</p>
						<p className='number'>{ultimoCisterna}%</p>
					</div>
				</div>
				<div className='chart'>
					<Chart
						chartType='LineChart'
						data={chartData}
						width={'100%'}
						height={'300px'}
						options={{title: "Evolução do nível de água da caixa e da cisterna ao longo das últimas 24 horas (%)"}}
						/>
				</div>
			</div>
		</div>
	);
}

export default App;
