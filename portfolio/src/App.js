import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './portfolio';
import Notfound from './portfolio/notfound';



function App() {
  return (
    <>
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route component={Notfound} />
        </div>
      </Router>
    </>
  );
}

export default App;
