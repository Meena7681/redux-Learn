import React,{useState}  from "react";
import { connect } from 'react-redux';

function Bat(props){
     return (
        <div>
          <h1>Bat:{props.bats }</h1>
          <button onClick={props.buyBat}>buy Bat</button>

        </div>
     )
}
const mapStateToProps =(state)=> {
   return {
     bats : state.bat.bats
   }
}
const mapDispatchToProps =(dispatch) => {
  return {
     buyBat: ()=> dispatch({type:'BUY_BAT'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bat)
