import { useState } from 'react';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/Fomulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Fluxo',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'FURIA Esports',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'INTZ',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'KaBuM! Esports',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Liberty',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Los Grandes',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'LOUD',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'paiN Gaming',
      corPrimaria: '#CDC2AE',
      corSecundaria: '#ECE5C7'
    },
    {
      nome: 'RED Canids Kalunga',
      corPrimaria: '#e8e2e2',
      corSecundaria: '#bd253c'
    },
    {
      nome: 'Vivo Keyd Stars',
      corPrimaria: '#370d3c',
      corSecundaria: '#8f22b1'
    },
  ]

  const [jogadores, setJogadores] = useState([])
  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
      />)} 
    </div>
  );
}

export default App;
