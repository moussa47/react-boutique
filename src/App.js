import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import  Navbar from './components/navbar';
import  Cart from './components/cartFolder/cart';
import  ProductList from './components/productList';
import  Details from './components/details';
import Default from './components/default';
import Modal from './components/modal';
import Footer  from './components/footer';


function App() {
  
    
  
  return (

      <BrowserRouter>
     <Navbar />
      <Switch>
      <Route  exact path='/'        component={ProductList}/>
      <Route  path='/details' component={Details} />
      <Route  path='/cart' component={Cart} />
      <Route  component={Default} />
      </Switch>
      <Modal />
      <Footer/>
      

      </BrowserRouter>
  );
}

export default App;
