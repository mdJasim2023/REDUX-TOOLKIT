
import Countries from './features/countries/Countries';
import Counter from './features/counter/Counter';
import Todo from './features/todolist/Todo';

function App() {
  return (
    <div className="App">
        <Counter></Counter>
        <Todo></Todo>
        <Countries></Countries>
    </div>
  );
}

export default App;
