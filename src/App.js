import { Outlet } from 'react-router';
import './App.css';

function App() {
  return (
    <div className='appDiv'>
      <Outlet></Outlet>      
    </div>
  );
}

export default App;
