import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

import Favorites from './views/Favorites'
import Home from './views/Home'
import { ImgProvider } from './context/ImgContext'

const PHOTO_URL = '/photos.json'

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
