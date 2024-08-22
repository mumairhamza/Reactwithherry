import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Textfoam from './componets/Textfoam';


function App() {
  return (
   <>
  <Navbar/>
   <div className="container">
   <Textfoam heading ="Enter your text"/>

   </div>
   </>
  );
}

export default App;
