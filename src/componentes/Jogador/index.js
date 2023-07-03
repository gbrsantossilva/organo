import './Jogador.css'

const Jogador = ({nick, imagem, lane, corDeFundo}) => {
    return (<div className='jogador'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nick}></img>
        </div>
        <div className='rodape'>
            <h4>{nick}</h4>
            <h5>{lane}</h5>
        </div>
    </div>)
}

export default Jogador