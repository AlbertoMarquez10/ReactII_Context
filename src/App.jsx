import { Route, Routes } from 'react-router-dom'
import { ImgProvider } from './context/ImgContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Favorites from './views/Favorites'
import Home from './views/Home'

const App = () => {
  
  return (
    <ImgProvider>
      <div>
        <Navbar />

        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/favoritos'
            element={<Favorites />}
          />
        </Routes>
      </div>
    </ImgProvider>
  );
};
export default App;
