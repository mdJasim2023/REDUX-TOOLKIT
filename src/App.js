
import './App.css';
import CounterA from './features/counter/Counter';
import Countries from './features/countries/Countries';
import Products from './features/products/Products';
import Todo from './features/todolist/Todo';
function App() {
  return (
    <div className='border border-5 p-5 m-2 border-info'>
      <h1>WELCOME TO RTK SERVICES</h1>
      <div className="border border-success m-2 p-">
        <Products></Products>
        <Countries></Countries>
        <CounterA></CounterA>
        <Todo></Todo>
    </div>
    </div>
  );
}

export default App;
