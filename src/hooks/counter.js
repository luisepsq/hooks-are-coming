import React, { useState } from 'react'
import Button from '/home/lpenate/git/hooks-are-coming/src/styled/Button.js'

const Counter=()=> {
const [contador, setContador] = useState(0);
    return(
        <div>
        <h1>El contador está  a {contador}</h1>
        <br/>
        <Button primary={true} onClick={()=>setContador(contador+1)}>Incrementar</Button> 
        <br/> 
        <Button primary={false} onClick={()=>setContador(contador-1)}>Decrementar</Button>   
        </div>
    )
}
export default Counter