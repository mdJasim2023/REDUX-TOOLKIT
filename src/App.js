import logo from './logo.svg';
import './App.css';
import CounterA from './feautures/counter/Counter';
import Todo from './feautures/todolist/Todo';


function App() {
  return (
    <div className="border border-success m-2 p-5">
        <CounterA></CounterA>
        <Todo></Todo>
    </div>
  );
}

export default App;
