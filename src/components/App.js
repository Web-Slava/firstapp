import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import NewsContainer from './news/NewsContainer';

function App() {
  return (
    <div className="card">
      <Header author="Slava"/>
      <NewsContainer />
    </div>
  );
}

export default App;
