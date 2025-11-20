// src/component/Greeting.jsx
import GreetCon from './GreetCon.jsx';

// props
export default function Greeting(props) {
  return (
    <div>
      <h1>Hello {props.fname}, Age is : {props.age}</h1>
      {/*and fname = {name} is an arguments, so when ever we pass the arguments to some particular function it acts as an props and we can fetch it like {props.fname} */}
     <GreetCon n = {props.fname} /> {/*key value pair is must */}
    </div>
  );
}
