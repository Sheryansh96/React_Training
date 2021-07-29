import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet' 
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message';
import Counter from './Components/Counter';
import Functionclick from './Components/Functionclick'
import ClassClick from './Components/ClassClick';
import EventBinder from './Components/EventBinder';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/* <ParentComponent /> */}
      {/* <EventBinder /> */}
      {/* <ClassClick /> */}
      {/* <Functionclick></Functionclick> */}
      {/* <Counter></Counter> */}
      { /* <Greet name="Clark" heroName="Superman">
      <p> This is Childern Props </p>
      </Greet>
      <Greet name="Bruce" heroName="Batman">
      <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="WonderWoman"/>
      <Welcome name="Clark" heroName="Superman"></Welcome>
      <Welcome name="Bruce" heroName="Batman"></Welcome> 
  <Welcome name="Diana" heroName="WonderWoman"></Welcome> */}
      {/* <Message></Message> */}
      {/*<Hello></Hello> */}
    </div>
  );
}

export default App;
