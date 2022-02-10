import React from "react";
import { render } from 'react-dom';

const $root = document.getElementById('root');

type TpArrCurso = {
    nome:string;
    verificado: boolean;
}

type TpCursos = {
    nome:string;
    verificado: boolean;
    selecionado: boolean;
    onClick: () => void;
}
 
const Cursos = (prop:TpCursos) => {
    return(
        <div onClick={(e) => prop.onClick()}>
            <h1>
                {prop.nome}
                {prop.verificado && <span> ok</span>}
                {prop.selecionado && <span>* </span>}
            </h1>
        </div>
    )
}

const App = () => {
    //States
    const [Listcursos, setListcursos] = React.useState<TpArrCurso[]>( [
        {nome:'HTML', verificado:false},
        {nome: 'CSS', verificado: true},
        {nome: 'Js', verificado:true}
    ]);

    const [novoNomeCurso, setnovoNomeCurso] = React.useState('');
    const [novoVerificadoCurso, setnovoVerificadorCurso] = React.useState(false);
    const [cursoSelecionado, setcursoSelecionado] = React.useState('HTML')

    return(
        <div>
            <form onSubmit={ e => {
                e.preventDefault()
                const novoCurso = {
                    nome: novoNomeCurso,
                    verificado: novoVerificadoCurso
                }

                setListcursos([...Listcursos, novoCurso])
                setnovoNomeCurso('')
                setnovoVerificadorCurso(false)
            }}>
                <input type="text" value={novoNomeCurso} onChange={e => setnovoNomeCurso(e.target.value)} />
                <input type="checkbox" checked={novoVerificadoCurso} onChange={e => setnovoVerificadorCurso(e.target.checked)} />
                <button type="submit">Criar curso</button>
              </form>                   
            
            {Listcursos.map((c) => (
                <Cursos key={c.nome} {...c} selecionado={c.nome === cursoSelecionado}  onClick={() => setcursoSelecionado(c.nome)}/>
            ))}
        </div>
    )
}

const ListComp = () => {
    return(
        <div>
            <App></App><hr />
            <App></App>
        </div>
    )
}

render(<ListComp/>, $root)