import React from 'react';
import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

import './App.css';

function App() {
	const fake = [
        {
            "id": 1,
            "caixa": 57.0,
            "cisterna": 73.0,
            "created_at": "2022-12-06T09:40:58.343264Z"
        },
        {
            "id": 2,
            "caixa": 12.8,
            "cisterna": 9.2,
            "created_at": "2022-12-06T09:48:56.482081Z"
        },
        {
            "id": 3,
            "caixa": 48.5,
            "cisterna": 32.0,
            "created_at": "2022-12-06T11:23:15.965151Z"
        },
        {
            "id": 4,
            "caixa": 9.2,
            "cisterna": 70.2,
            "created_at": "2022-12-06T11:23:16.138755Z"
        },
        {
            "id": 5,
            "caixa": 90.1,
            "cisterna": 93.4,
            "created_at": "2022-12-06T11:23:16.259233Z"
        },
        {
            "id": 6,
            "caixa": 20.1,
            "cisterna": 35.9,
            "created_at": "2022-12-06T11:23:16.352481Z"
        },
        {
            "id": 7,
            "caixa": 77.9,
            "cisterna": 38.0,
            "created_at": "2022-12-06T11:23:16.481926Z"
        },
        {
            "id": 8,
            "caixa": 92.3,
            "cisterna": 83.3,
            "created_at": "2022-12-06T11:23:16.598071Z"
        },
        {
            "id": 9,
            "caixa": 9.4,
            "cisterna": 70.8,
            "created_at": "2022-12-06T11:23:16.729700Z"
        },
        {
            "id": 10,
            "caixa": 10.6,
            "cisterna": 86.9,
            "created_at": "2022-12-06T11:23:16.866759Z"
        },
        {
            "id": 11,
            "caixa": 82.0,
            "cisterna": 63.5,
            "created_at": "2022-12-06T11:23:16.983703Z"
        },
        {
            "id": 12,
            "caixa": 45.7,
            "cisterna": 7.3,
            "created_at": "2022-12-06T11:23:17.099740Z"
        },
        {
            "id": 13,
            "caixa": 9.2,
            "cisterna": 65.9,
            "created_at": "2022-12-06T11:23:17.252188Z"
        },
        {
            "id": 14,
            "caixa": 21.4,
            "cisterna": 68.6,
            "created_at": "2022-12-06T11:23:17.388867Z"
        },
        {
            "id": 15,
            "caixa": 25.9,
            "cisterna": 3.6,
            "created_at": "2022-12-06T11:23:17.516867Z"
        },
        {
            "id": 16,
            "caixa": 79.9,
            "cisterna": 14.7,
            "created_at": "2022-12-06T11:23:17.643643Z"
        },
        {
            "id": 17,
            "caixa": 61.5,
            "cisterna": 16.5,
            "created_at": "2022-12-06T11:23:17.786932Z"
        },
        {
            "id": 18,
            "caixa": 11.5,
            "cisterna": 51.9,
            "created_at": "2022-12-06T11:23:17.911471Z"
        },
        {
            "id": 19,
            "caixa": 6.3,
            "cisterna": 19.0,
            "created_at": "2022-12-06T11:23:18.070489Z"
        },
        {
            "id": 20,
            "caixa": 38.8,
            "cisterna": 17.9,
            "created_at": "2022-12-06T11:23:18.225832Z"
        }].reverse()

	const [ chartData, setChartData ] = useState([])

	const loadData = (data) => {
		let dadosList = [['Data/Hora', 'Caixa', 'Cisterna']]

		for (const valor of data) {
			let dados = [valor.created_at, valor.caixa, valor.cisterna]
			dadosList.push(dados)
		}

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
						<p className='number'>{fake[0]['caixa']}%</p>
					</div>
					<div className='box'>
						<p>Nível da Cisterna</p>
						<p className='number'>{fake[0]['cisterna']}%</p>
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
