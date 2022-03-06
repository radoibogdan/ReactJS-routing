import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <MainHeader />
     <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
     </Routes>
    </Router>
  );
}

export default App;
