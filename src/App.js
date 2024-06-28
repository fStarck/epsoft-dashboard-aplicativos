import React from 'react';
import './App.css';
import Pie from './pie.js';
import JSON from './mock.json';

function App() {
  
  //Tempo Médio de Uso
  const seriesMedioUso = JSON["Uso de Aplicações"].map(obj => parseInt(Object.values(obj)[0]));;
  const labelsMedioUso = JSON["Uso de Aplicações"].map(obj => Object.keys(obj)[0]);;
  //Uso de máquinas por intensidade
  const seriesIntensidadeMaquinas = JSON["Uso de Máquinas por intensidade"].map(obj => parseInt(Object.values(obj)[0]));;
  const labelsIntensidadeMaquinas = JSON["Uso de Máquinas por intensidade"].map(obj => Object.keys(obj)[0]);;
  //Atividade das máquinas
  const seriesAtividadeMaquinas = JSON["Máquinas por Tipo de Atividade"].map(obj => parseInt(Object.values(obj)[0]));;;
  const labelsAtividadeMaquinas = JSON["Máquinas por Tipo de Atividade"].map(obj => Object.keys(obj)[0]);;;



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='graph-pizza'>
        <div className='pizza'>
          <Pie series={seriesMedioUso} labels={labelsMedioUso} width={500}/>,
        </div>
        <div className='pizza'>
          <Pie series={seriesIntensidadeMaquinas} labels={labelsIntensidadeMaquinas} width={500}/>,
        </div>
        <div className='pizza'>
          <Pie series={seriesAtividadeMaquinas} labels={labelsAtividadeMaquinas} width={500}/>,
        </div>
      </div>
    </div>
  );
}

export default App;