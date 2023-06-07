import logo from './logo.svg';
import './App.css';
import CartForm from './components/CartForm';
import CartSearch from './components/CartSearch';
import CartList from './components/CartList';
import CartValue from './components/CartValue';

function App() {
  return (
    <div className='container'>
        <CartForm/>
        <CartSearch/>
        <CartList/>
        <CartValue/>
    </div>
  );
}

export default App;
