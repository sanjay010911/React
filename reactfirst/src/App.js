//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FunctionalComp from './components/FunctionalComponents';
import { ClassComponents} from './components/ClassComponents';
import click from './components/click';
function App(){
  const data='Sanjay';
 return (
    <div>
      <Header data={data}/>
       <h1 className='clr'>hello world</h1>
       <FunctionalComp/>
       <ClassComponents/>
       <click/>
      
    </div>
    
    
  );
}

function Scroll() {
  return (
    <div>
       <h1>this is a sample page</h1>
    </div>
    
  );
}
export default App;
