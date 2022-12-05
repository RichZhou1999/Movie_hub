import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Navigator from './Component/Navigator/Navigator';
import Trending from './Component/Trending/Trending';

function App() {
  return (
    <>
    <div className='appStyle'>
    <Header></Header>
    <Navigator></Navigator>
    <Trending></Trending>
    </div>
    </>
  );
}

export default App;
