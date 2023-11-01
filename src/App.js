import './App.css';
import FourFunction from './components/FourFunction';

const add =(a)=>{
 // let a=10
  const b=20
  let c = a+b
  return c
}

function App() {
  let arr = [10,20,30,40,50]
  let arr1 = arr.map((i)=>{
    return <li>{i}</li>
  })

  return (
    <>
    <div className="App">
      {/* <h3>My First React App</h3>
      <h4>Addition is  : {add(10)}</h4>
      <h4>Array is  : {arr[0]}</h4>
      <ul>
        {arr1}
      </ul>
      <FirstCount />
      <ClassComponent /> */}
      <FourFunction />
    </div>
    
    </>
  );
}

export default App;
