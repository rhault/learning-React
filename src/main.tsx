import React from 'react'
import ReactDOM, { render } from 'react-dom';
import PropTypes from 'prop-types';
import Typed from 'typed.js'

const $root = document.getElementById('root');

//Validaçao com typescript
type propsCurso = {
      nome: string;
      verificado: boolean
};

//hook
const useTyped = (ref:RefObject<HTMLElement>, text:string) => {
      React.useEffect(() => {
            const typed = new Typed(ref.current as HTMLElement, {
                  strings: [text],
                  typeSpeed: 0,
                  backSpeed: 0,
                  fadeOut: true,
                  loop: true
            });
      });
}

//Componente one
const CompClass = (props:propsCurso) => {
      //State
      const [hovered, setHovered] = React.useState(false);
      const [counter, setCounter] = React.useState(0);


      //Effect
      React.useEffect(() => {
            
      }, [counter]);
      

      return(
            <h2 onMouseEnter={() => {
                  setHovered(true)
                  setCounter(counter + 1)
            }} onMouseLeave={() => {
                  setHovered(false)
            }}>
                  Curso <span className='cursos'>{props.nome}</span>
                  {props.verificado && <span>Ok</span>}
            </h2>
            
      )
};

//Validaçao com React
CompClass.propTypes = {
      nome: PropTypes.string
};

const CompHeader = (prop:propsCurso) => {
      const headerRef = React.useRef<HTMLHeadingElement>(null)
      useTyped(headerRef,'OI')
      return(
            <div>
            <h3 ref={headerRef}>Im h3 with reference</h3>
            </div>
      )
}

const ElementTitle = <h1>Cursos</h1>

const $app = (
      <div>
            {ElementTitle}
            <CompClass nome='HTML' verificado/>
            <CompClass nome='CSS'/>
            <CompClass nome='Javascript'/>
            <CompHeader nome='React'/>
      </div>
)
//ReactDOM.render($app, $root);      