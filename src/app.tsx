import React from "react";
import ReactDOM, { render } from 'react-dom';

const $root = document.getElementById('root');
const Listcursos = [
      {nome:'HTML', verificado:false},
      {nome: 'CSS', verificado: true},
      {nome: 'Js', verificado:true}
];
type TpCursos = {
      nome:string,
      verificado: boolean
}

const Cursos = (prop:TpCursos) => {
      return(
            <div>
                  <h2>oi</h2>
                  <h1>{prop.nome}</h1>
                  {prop.verificado && <span>Ok</span>}
            </div>
      )
}

const App = () => {
      console.log(Listcursos[0].nome)
      return(
            <div>
                  
                  {Listcursos.map((c) => {
                        <Cursos key={c.nome} nome={c.nome} verificado={c.verificado}></Cursos> 
                  })}
            </div>
      )
}

ReactDOM.render(<App/>, $root)