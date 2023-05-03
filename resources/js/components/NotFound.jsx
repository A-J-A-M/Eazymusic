// resources/js/components/Contact.jsx

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/bootstrap.min.css';
import '../../css/app.css'

class NotFound extends Component {
    render() {
        return (
            <div className='esto'>
                    404
            </div>
        );
    }

    
  }

// if (document.getElementById('contact')) {
//     ReactDOM.render(<Contact />, document.getElementById('contact'));
// }

export default NotFound;