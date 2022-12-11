import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Navigator from './Component/Navigator/Navigator';
import Trending from './Component/Trending/Trending';
import CustomPagination from './Component/CustomPagination/CustomPagination';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './Component/Movie/Movie';
import Series  from './Component/Series/Series';
import Search from './Component/Search/Search';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='appStyle'>
    <Header></Header>
    <Routes>
    <Route path="/" element={<Trending/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/series" element={<Series/>}/>
    <Route path="/search" element={<Search/>}/>
    </Routes>
    {/* <Trending></Trending> */}
    <Navigator></Navigator>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
