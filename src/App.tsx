import React from 'react';
import { CardsList } from './components/CardsList';
import { InfoBar } from './components/InfoBar';

function App() {
  return (
    <div className='App'>
      <InfoBar />
      <CardsList />
    </div>
  );
}

export default App;
