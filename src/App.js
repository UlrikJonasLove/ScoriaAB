import React from "react";
import { Provider } from "react-redux";
import Header from './components/views/header'
import Menu from './components/views/menu';
import Footer from './components/views/footer';
import store from "./store";
import "../src/style/App.css";

function App() {
 return(
      <Provider store={store}>
        <div className = 'wrapper'>
          <Header />
          <hr />
          <Menu />
          <Footer />
        </div>  
      </Provider>
    );
  }

export default App;
