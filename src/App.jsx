import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Counter1 from './features/counter copy/Counter1';

  
function App() {
  return (
    <div className="border border-success p-3 m-2">
        <h1 className='text-primary m-2'>WELCOME TO RTK</h1>
            <Counter></Counter>
            <Todolist></Todolist>
            <Counter1></Counter1>
    </div>
  );
}

export default App;
