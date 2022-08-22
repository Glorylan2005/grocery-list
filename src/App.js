import image from './shopping.webp';
import imageTwo from './man.jpg';
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div>
      <div className='app'>
        <div className='container'>
          <img src={image} alt="shopping" width={200} />
        </div>
        <div className='container'>
          <h1> Grocery List</h1>
        </div>
        <GroceryList />

        <div className='container'>
        <img src={imageTwo} alt="shopping" width={200} />
        </div>

      </div>
     
    </div>
  );
}

export default App;
