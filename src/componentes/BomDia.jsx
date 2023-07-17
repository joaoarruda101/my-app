import React, { Fragment} from 'react'

//Para funcioanr você precisa adicionar uma key para cara tag
// export default props => [
//     <h1 key='h1'>Bom dia {props.nome} , {props.idade} !</h1>,
//     <h2 key='h2'>Até breve!</h2>
// ]
    
 export default props => 
     <Fragment>
         <h1>Bom dia {props.nome} , {props.idade} !</h1>
         <h1>Até breve!</h1> 
     </Fragment>