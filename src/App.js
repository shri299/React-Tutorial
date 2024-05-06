import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Name from './props/Name';

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet>
      <Welcome></Welcome> */}
      <Name name='sushi' category='food'></Name>
      <Name name='wasabhi' category='food'></Name>
      <Name name='shit' category='shit'></Name>
      <Name name='ice-cream' category='food'><p>this is child of ice cream</p></Name>
    </div>
  );
}

export default App;
