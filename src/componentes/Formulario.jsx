import React, { Component } from 'react'

export class Saudacao extends Component {

    // state = {
    //     tipo: "Fala",
    //     nome: "Pedro"
    // }

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
     }
     
    setTipo(x) {
        let i = 1
        setInterval(() => {
            this.setState({tipo: ++i})
        }, 1000)
        this.setState({ tipo: x.target.value })
    }


    constructor(props){
        super(props)
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    setTipo(e){
        this.setState({tipo: e.target.value})
    }

    setNome(e){
        this.setState({nome: e.target.value})
    }

    render() {  
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1> 
                <hr />
                {/* <input type="text" placeholder="Tipo..." value={tipo} onChange={x => this.setTipo(x)} />
                <input type="text" placeholder="Nome..." value={nome} onChange={x => this.setNome(x)} /> */}
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Tipo..." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}

export class Foumulario extends Component {

    state = {
        nome: "nome",
        email: "email",
        descricao: "descricao"
    }

    setNome(x) {
        this.setState({ nome: x.target.value })
    }
    setEmail(x){
        this.setState({ email: x.target.value })
    }
    setDescricao(x) {
        this.setState({ descricao: x.target.value })
    }
    

    render() {
        const { nome, email, descricao } = this.state
        return (
            <div>
                <h1>{nome} {email} {descricao}</h1>
                <hr />
                <input type="text" placeholder="Nome" value={nome} onChange={x => this.setNome(x)} />
                <input type="text" placeholder="Email" value={email} onChange={x => this.setEmail(x)} />
                <input type="text" placeholder="Email" value={descricao} onChange={x => this.setDescricao(x)} />
            </div>
        )
    }
}

export default {Saudacao, Foumulario}