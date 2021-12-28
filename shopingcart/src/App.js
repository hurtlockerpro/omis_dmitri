import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './components/About';
import ProductList from './components/ProductList';
import data from './data'
import Basket from './components/Basket';

function App() {

  const [cartItems, setCartItems] = useState([])

  const onAddProduct = (product) => {
    //console.log('product added: ' + id)
    //cartItems.push(product)
    setCartItems([...cartItems, product])
    console.log(cartItems)
  }

  return (
    <Router> 
      <div className="App">
        { <Header /> }
      </div>   
      <Routes>
        <Route path='/' element={
          <div>
            <ProductList products={ data.products } onAddProduct={onAddProduct} />
            <Basket cartItems={ cartItems } />
          </div>
        } /> 
        <Route path='/about' element={ <About /> } />
      </Routes>
    </Router>
  );
}

export default App;
