
import './App.css';
import CounterA from './features/counter/Counter';
import Todo from './features/todolist/Todo';
function App() {
  return (
    <div className="border border-success m-2 p-5 d-flex">
      <div className='w-50'>
        <h1 className='text-primary p-2'>Counter Application</h1>
        <CounterA></CounterA>
      </div>
      <div className='w-50'>
        <h1 className='text-info p-2 m-1'>Todo-List Application</h1>
        <Todo></Todo>
      </div>
        
        
    </div>
  );
}

export default App;
