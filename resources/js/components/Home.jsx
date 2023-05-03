// resources/js/components/Home.jsx

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../../css/bootstrap.min.css';
import '../../css/app.css';
import nota from '../../img/corchete.png';
import nota2 from '../../img/medioC.png';
import nota3 from '../../img/sol.png';
import wave from '../../img/waves.gif';

class Home extends Component {
    zero(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    }
     reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
    componentDidMount(){
        window.addEventListener("scroll", this.reveal);
        this.reveal();
        this.zero();
    }

    render() {
        return (
                <div className='home'>
                    <div className="row reveal">
                        <div className="col-1">
                            <img className='img-style-3 middle' src={nota3}/>
                        </div>
                        <div className="col-1">
                            <img className='img-style-1 middle' src={nota}/>
                        </div>
                        <div className="col-1">
                            <img className='img-style-2 middle' src={nota2}/>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4 text-title middle">
                            EAZYMUSIC
                        </div>
                        <div className="col-4"></div>

                        <div className="col-4"></div>
                        <div className="col-4 text-subtitle middle margin-t7vm">
                            Tu maestro musical
                        </div>
                        <div className="col-4"></div>

                    </div>
                    <div className="row reveal">
                        <div className="col-1"></div>
                        <div className="col-3">
                            <div className="text-subtitle">
                                ¿Qué es?
                            </div>
                            <div className='text-p'>
                                Es una plataforma en donde los jóvenes pueden aprender 
                                composición musical a su ritmo y de forma que les sirva 
                                para crear su propia música.
                            </div>
                        </div>
                        <div className="col-4 ">
                            <img className='img-style-wave middle' src={wave}/>
                        </div>
                        <div className="col-3">
                            <div className="text-subtitle">
                                Objetivo
                            </div>
                            <div className='text-p'>
                            Lograr que los jóvenes puedan aprender teoría musical 
                            que le sea útil para la creación de canciones de 
                            autoría propia y fomentar el talento.
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
        );
    }

    
  }

// if (document.getElementById('home')) {
//     ReactDOM.render(<Home />, document.getElementById('home'));
// }

export default Home;