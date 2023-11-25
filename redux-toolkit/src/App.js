import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Cart from './components/Cart.jsx';
import RootLayout from './components/RootLayout.jsx';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout /> }>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ));
  return (
    <div className="App">
         <RouterProvider router={router}/>
    </div>
  );
}

export default App;
