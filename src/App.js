import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-body  vh-100'>
     <Navbar logo={logo}/>
      <div className='main-wrapper'>

    </div>
     <Footer logo={logo} />
    </div>
  );
}

export default App;
