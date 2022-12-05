import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Navigator from './Component/Navigator/Navigator';
import Trending from './Component/Trending/Trending';
import CustomPagination from './Component/CustomPagination/CustomPagination';

function App() {
  return (
    <>
    <div className='appStyle'>
    <Header></Header>
    <Trending></Trending>
    <Navigator></Navigator>
    </div>
    </>
  );
}

export default App;
