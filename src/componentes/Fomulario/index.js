import { useState } from 'react';
import Botao from '../Botão';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {
    const [nick, setNick] = useState('');
    const [lane, setLane] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nick,
            lane,
            imagem,
            time
        })
        setNick('')
        setLane('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nick" 
                    placeholder="Digite seu Nick" 
                    valor={nick}
                    aoAlterado={valor=> setNick(valor)}    
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Lane" 
                    placeholder="Digite sua lane" 
                    valor={lane}
                    aoAlterado={valor=> setLane(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor=> setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time'
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor=> setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>   
            </form>
        </section>
    )
}

export default Formulario