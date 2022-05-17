import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { ChangeToAbhishek, ChangeToAvinash } from './ActionCreator/ActionCreator';

function App(props) {
  return (
    <div className="App">
     
      <header className="App-header">
      <h1>{props.state.payload}</h1>
        {console.log(props.state.payload)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={props.changeName}>Change To Abhishek</button>
        <button onClick={props.changeName1}>Change To Avinash</button>
      </header>
    </div>
  );
}
let mapStateToProps=(store)=>{
  return {
    state:store
  };
}
let napDispatchToProps=(dispatch)=>{
  return {
    changeName:()=>{dispatch(ChangeToAbhishek());},
    changeName1:()=>{dispatch(ChangeToAvinash());}
  };
}

export default connect(mapStateToProps,napDispatchToProps)(App);
