import { legacy_createStore } from "redux";
import rootreducer from "../Reducer/Reducer";

let store = legacy_createStore(rootreducer);

export default store;