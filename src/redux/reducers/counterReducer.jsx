import React from 'react'



export const arttir=()=>({type:"ARTTIR",payload1:"ARTTIRILDI"})

const counterReducer = (state={sayac:0,text1:""},{type,payload1}) => {


switch (type) {
  case "ARTTIR":
    return{sayac:state.sayac+1, text1:payload1}


    case "AZALT":
      return{sayac:state.sayac-1}

      case "SIFIRLA":
        return{sayac:0, text1:payload1}

  default:
    break;
}


}

export default counterReducer