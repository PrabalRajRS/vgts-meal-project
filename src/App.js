import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Meal from './pages/meal/Meal';
import OrderDetails from './pages/orderDetails/OrderDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/meal/:id" element={<Meal />} />
          <Route path="/meal/orderDetails/:id" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
