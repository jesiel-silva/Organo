import './Botao.css'

const Botao = (props) => {
    return (<button className="botao">
                {props.children}{/* Redenriza tudo que estiver no corpo do botão */}
            </button>
    )
}

export default Botao