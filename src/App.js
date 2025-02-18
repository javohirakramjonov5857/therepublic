import './App.css';
import DownloadCat from './components/downloadCat/DownloadCat';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Product from './components/product/Product';
import Igracard from './components/Igracard/igracard'
import Sovgalar from './components/Sovgalar/sovgalar';
import Oyinlar from './components/Oyinlar/oyinlar';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Home />
      <DownloadCat/>
      <Product />
      <Igracard />
      <Sovgalar />
      <Oyinlar />
      <Footer />
    </div>
  );
}

export default App;