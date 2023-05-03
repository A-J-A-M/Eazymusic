// resources/js/components/App.jsx

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/bootstrap.min.css';
import '../../css/app.css';
import { Route, BrowserRouter as Router, Routes, useRoutes } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Todoteca from './Todoteca';
import NotFound from './NotFound';
import Synth from './Synth';

const Tree = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/todoteca", element: <Todoteca /> },
      { path: "/synth", element: <Synth /> },
      { path: "404", element: <NotFound /> },
    ]);
    return routes;
  };
class App extends Component {
    constructor(props){
        super(props);
        window.onload = function () {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
        };
    }
    
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/todoteca" element={<Todoteca/>} />
                        <Route path="/synth" element={<Synth/>} />
                    </Routes>
                </Router>
            </React.Fragment>
            
        );
    }

    
  }

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}