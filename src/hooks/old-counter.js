import React from 'react'
export default class Counter extends React.Component {
state= {contador :0}


render (){
    return(
        <div>
            <span>El contador esta a {this.state.contador}</span>
            <br/>
            <button onClick={()=>this.setState({contador: this.state.contador+1})}>
                Incrementar
            </button>  
            <button onClick={()=>this.setState({contador: this.state.contador-1})}>
                Decrementar
            </button>   
        </div>
    )
}
}