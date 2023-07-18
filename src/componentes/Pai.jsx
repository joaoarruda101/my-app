import React from 'react'

function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h1>Filhos</h1>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>
