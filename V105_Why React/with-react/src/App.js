import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//App component home page ka component hai jisme hum apne app ka main code likhenge
function App() {
  //ek nayi state bnao count naam ki jisko mai update kr pau setCount naam k variable se jiski default value 0 hogi
  //state means ek aisa variable jiski value hm change kr paye aur dom me v use kr paye
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar logoText="CodeWithSherry"/>
        <div className='Value'>{count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <Footer/>
    </div>
  );
}

export default App;
