import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Route/Router';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={route}></RouterProvider>

    </div>
  );
}

export default App;
