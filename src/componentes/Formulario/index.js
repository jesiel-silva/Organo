import './Formulario.css'
import CampoTexto from "../CampoTexto"
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
          nome,
          cargo,
          imagem,
          time
        })

        setNome('')
        setCargo('')
        setImagem('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para o card do colaborador</h2>                
                <CampoTexto 
                  obrigatorio={true} 
                  label="Nome" 
                  placeholder='Digite seu nome' 
                  valor={nome}
                  aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                  obrigatorio={true} 
                  label="Cargo" 
                  placeholder='Digite seu cargo' 
                  valor={cargo}
                  aoAlterado={cargo => setCargo(cargo)}
                />

                <CampoTexto 
                  label="Imagem" 
                  placeholder='Informe o endereço da imagem' 
                  valor={imagem}
                  aoAlterado={imagem => setImagem(imagem)}
                />

                <ListaSuspensa 
                  obrigatorio={true} 
                  label="Time" 
                  itens={props.times} 
                  valor={time}
                  aoAlterado={time => setTime(time)}
                />

                <Botao>
                    Criar card                    
                </Botao>

            </form>
        </section>
    )
}

export default Formulario