import React from 'react';
import Header from './components/Header';
import ItemGrid from './components/ItemGrid';
import Footer from './components/Footer';
import { shopItems } from './data/items';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <ItemGrid items={shopItems} />
      </main>
      <Footer />
    </div>
  );
}

export default App;