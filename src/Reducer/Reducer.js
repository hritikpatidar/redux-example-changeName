import { A, B } from "../Constants/Constants";
import initialState from "../InitialState/InitialState";

let rootreducer = (oldState=initialState, action)=>{
    let newState = oldState;
    switch(action.type){
      case A:
        newState= {
          ...newState,
          payload:"abhishek"
        }
      break;
      case B:
        newState= {
          ...newState,
          payload:"avinash"
        }
      break;
      default:
    }
    return newState;
}
export default rootreducer;