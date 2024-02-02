
import Countries from './features/countries/Countries';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Countries></Countries>
      </Provider>
    </div>
  );
}

export default App;
