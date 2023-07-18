import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './componentes/Primeiro'
import Blabla from './componentes/BomDia'
import Multi , {BoaNoite} from './componentes/Multiplos'
import Form from './componentes/Formulario'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(<Primeiro />, document.getElementById('root'));

const elemento = <h1>Elemendo rendereizado</h1>
ReactDOM.render(elemento , document.getElementById('root2'));

ReactDOM.render(<Blabla nome="Guilherme" idade={10} />, document.getElementById('root3'))

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>
, document.getElementById('root4'))

ReactDOM.render(
    <div>
         <Form.Saudacao />
         <Form.Foumulario /> 
    </div>
, document.getElementById('root5'))


ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">]
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
        </Pai>
    </div>
, document.getElementById('root6'))


