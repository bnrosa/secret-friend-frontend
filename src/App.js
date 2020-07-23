import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/navbar.component.js";
import Home from "./pages/home.page.js"
import AddPage from './pages/add.page';
import EditPage from './pages/edit.page';
import ReduxToastr from 'react-redux-toastr'

function App() {
  return (
    <Router>
    <Navbar/>
      <ReduxToastr/>
      <Route path="/" exact component={Home} />
      <Route path="/add" exact component={AddPage} />
      <Route path="/edit/:id" exact component={EditPage} />
    </Router>
  );
}

export default App;
