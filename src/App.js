import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ProductGrid from './ProductGrid';
import Config from './Config';

class App extends React.Component {

  render() {
      return (
        <div className="app">
          <header className="app-header">
            <div className="app-logo">
                <h1><a href="https://www.westelm.com">LOGO</a></h1>
            </div>
          </header>
          <main className="app-main">
            <ProductGrid productEndPoint = {Config.productEndPoint} />
          </main>
          <footer className="app-footer">
            <p>All Comments © Copyright 2019</p>
          </footer>
        </div>
      );
  }
}

export default App;
