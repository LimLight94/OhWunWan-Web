import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import BottomNav from "./presentation/components/BottomNav";
import Login from "./presentation/pages/auth/Login";
import Home from "./presentation/pages/Home";
import OhWunWan from "./presentation/pages/OhWunWan";
import Recipe from "./presentation/pages/Recipe";
import Shorts from "./presentation/pages/Shorts";
import MyPage from "./presentation/pages/MyPage";
import PrivateRoute from "./presentation/components/PrivateRoute";

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/ohwunwan" element={<OhWunWan/>}/>
            <Route path="/recipe" element={<Recipe/>}/>
            <Route path="/shorts" element={<Shorts/>}/>
            <Route exact path="/mypage" element={<PrivateRoute/>}>
              <Route exact path="/mypage" element={<MyPage/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            {/*<Route path="*" element={<NotFound/>}/>*/}
          </Routes>
          <BottomNav/>
        </BrowserRouter>
      </div>
  );
}

export default App;
