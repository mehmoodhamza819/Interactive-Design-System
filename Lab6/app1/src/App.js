import {useState} from 'react';
import logo from './logo.svg';
import About from './About';
import './App.css';
function TestingComponent({hamza,clickFunction})
{
  return (
  
    <button onClick={clickFunction}>Click Me {hamza}</button>
  
  
  );
}

function SignUp()
{
  return (
    <button>Sign up</button>
  );
}

function LogIn()
{
  return (
    <button>Log In</button>
  );
}

let isNewUser = false;
let content;
/*
if(isNewUser)
{
  content = <SignUp/>;
}
else
{
  content = <LogIn/>;
}
*/
function App() {
  const [count,setCount] = useState(0);


  function handleClick()
  {
    setCount(count+1);
    //alert('the button has been clicked');
  }



  return (
    <>
    <h1>Hello to our first app</h1>
    <p>This is a test for paragraph</p>
    <TestingComponent hamza={count} clickFunction={handleClick}/>
    <TestingComponent hamza={count} clickFunction={handleClick}/>
    
    <About />
    {isNewUser? <SignUp/>: <LogIn/>}
    
    </>
  );
}

export default App;
