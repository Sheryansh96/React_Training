import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet' 
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'


function App() {
  return (
    <div className="App">
      <Greet name="Clark" heroName="Superman">
      <p> This is Childern Props </p>
      </Greet>
      <Greet name="Bruce" heroName="Batman">
      <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="WonderWoman"/>
      <Welcome name="Clark" heroName="Superman"></Welcome>
      <Welcome name="Bruce" heroName="Batman"></Welcome> 
      <Welcome name="Diana" heroName="WonderWoman"></Welcome> 
      {/*<Hello></Hello> */}
    </div>
  );
}

export default App;
