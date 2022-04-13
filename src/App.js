import './App.css';
import DownloadCat from './components/downloadCat/DownloadCat';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Product from './components/product/Product';
import Igracard from './components/Igracard/igracard'
import Sovgalar from './components/Sovgalar/sovgalar';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Home />
      <DownloadCat/>
      <Product />
      <Igracard />
      <Sovgalar />
    </div>
  );
}

export default App;