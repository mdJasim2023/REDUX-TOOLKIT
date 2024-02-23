import { Outlet } from 'react-router';
import './App.css';
import Part1 from './MyComponents/Part1';
import Part2 from './MyComponents/Part2';
import Title from './MyComponents/Title';

function App() {
  return (
    <div className='appDiv'>
      <Title></Title>
      <Part1></Part1>
      <Outlet></Outlet>      
    </div>
  );
}

export default App;
