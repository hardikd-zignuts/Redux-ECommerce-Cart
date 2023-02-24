import NavBar from './components/NavBar';
import Cart from './components/Cart';
import './App.css';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container border-1 my-5 bg-secondary rounded p-4 '>
        <Cart />
      </div>
      <div className='container'><hr /></div>
      <div className='container border-1 my-5 bg-secondary rounded p-4 '>
        <h1 className='text-light'>Buy Your Favorite Products Here</h1>
        <Shop />
      </div>
    </div>
  );
}

export default App;
