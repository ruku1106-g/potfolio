import Home from './component/Home.jsx';
import {About} from './component/About.jsx'; // as we are not using default in export we need to use { }
import Contact from './component/Contact.jsx';
import Greet from './component/Greeting.jsx';
import Count from './component/Count.jsx';

function App() {  // JS - The function name should match the filename and start with a capital letter
 let name = "Rukmini";
 let age = 22;
  return (
    <> 
      {/* Empty fragment wraps everything since React components must return a single element.
          You could also use a <div> instead of <> </> */}
      <h1>Welcome to React</h1> {/* HTML inside JSX */}
    <Home/>
    <About/>
    <Contact/>
    <Greet fname = {name} age = {age}/> {/* if just give name it will just point to name and if we want to get the value of name {name} we just give it in{}, and every time we pass it in key= value; pair itself so we give some name.
    and fname = {name} is an arguments, so when ever we pass the arguments(is an props) to some particular function */}
<Count />
    </>
  );
}

export default App;

