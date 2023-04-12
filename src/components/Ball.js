import React, { useState } from "react";
import { connect } from "react-redux";

function Ball({balls,buyBall,sellBall}){
    const [qty,setQty]=useState(1);
    return(
          <div>
             <h1>Balls: {balls}</h1>
             <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)} />
             <button onClick={()=>buyBall(qty)}>Buy</button>
             <button onClick={sellBall}>Sell</button>
          </div>
    )
}

const mapStateToProps=(state)=>{
     return{
        balls: state.ball.balls
     }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyBall: (qty) => dispatch({type:'BUY_BALL',payload:qty}),
        sellBall:() => dispatch({type:'SELL_BALL'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball)