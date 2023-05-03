// resources/js/components/HelloReact.js

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/bootstrap.min.css';
import '../../css/app.css';

// export default function HelloReact() {
//     return (
//         <div className='menu'>
//            <header className='head'>
//                 <div>Hola</div>
//            </header>
//         </div>
        
//     );
// }

// if (document.getElementById('hello-react')) {
//     ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
// }
export class Header extends Component {
    render() {
        return (
            <header className='row head'>
                <div className="col-2 text-center">
                    <div className='text-headers'><a href='/'>INICIO</a></div>
                </div>
                <div className="col-3 text-center">
                    <div className='text-headers'><a href='/todoteca'>TODOTECA</a></div>
                </div>
                <div className="col-5 text-center">
                    <div className='text-headers'><a href='/synth'>PIANO VIRTUAL</a></div>
                </div>
                <div className="col-2 text-center">
                    <div className='text-headers'><a href='/contact'>CONTACTO</a></div>
                </div>
            </header>    
        );
    }

    
  }

export default Header;

// if (document.getElementById('header')) {
//     ReactDOM.render(<Header />, document.getElementById('header'));
// }