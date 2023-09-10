
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
// simple function
function handleClick(){
  alert('button click');
}
// arrow function
const handleClick2=()=>{
  alert('button 2 click');
}
// parameter function 
const addToFive=(num)=>{
  alert(num + 5);
} 

  return (
    <>
      <h3> React core concepts</h3>
      <Friends></Friends>
      <Users></Users>
      
     <Team></Team>

     <Counter></Counter>


      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>button2</button>
      <button onClick={()=>{alert('Third Button click')}}>Third</button>

      <button onClick={()=>addToFive(10)}>Four</button>
      

    </>
  )
}

export default App
