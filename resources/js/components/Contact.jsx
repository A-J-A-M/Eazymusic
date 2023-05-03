// resources/js/components/Contact.jsx

import React, { Component, useRef } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";
import "../../css/bootstrap.min.css";
import "../../css/app.css";
import nota from "../../img/corchete.png";
import nota2 from "../../img/medioC.png";
import nota3 from "../../img/sol.png";

class Contact extends Component {
    
    zero() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
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

    componentDidMount() {
        window.addEventListener("scroll", this.reveal);
        this.reveal();
        this.zero();
    }

    render() {
        // const form = useRef();
        const form = this.props.form;
        // require('dotenv').config({ path: './../../../.env' });
        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.init("BcnW91V_0XppqA2_V");

            // emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
            //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            //   form.current,
            //   process.env.REACT_APP_EMAILJS_USER_ID)
            emailjs
                .sendForm(
                    "service_2idj8j9",
                    "template_rapd5or",
                    form.current,
                    "BcnW91V_0XppqA2_V"
                )
                .then(
                    (result) => {
                        alert("Mensaje enviado con éxito");
                    },
                    (error) => {
                        console.log(error)
                        alert(
                            "Hubo un error al enviar el mensaje. Inténtelo de nuevo"
                        );
                    }
                );
            document.getElementById("email-send").value = "";
            document.getElementById("nombre-email").value = "";
            document.getElementById("message-email").value = "";
        };
        return (
            <div className="contact">
                <div className="row reveal">
                    <div className="col-1">
                        <img className="img-style-3 middle" src={nota3} />
                    </div>
                    <div className="col-1">
                        <img className="img-style-1 middle" src={nota} />
                    </div>
                    <div className="col-1">
                        <img className="img-style-2 middle" src={nota2} />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 text-title middle">CONTACTO</div>
                    <div className="col-4"></div>

                    <div className="col-1"></div>
                    <div className="col-10 text-f align-c margin-b5vm">
                        ¿Tienes alguna duda, queja o sugerencia? Contactanos con
                        tu correo y te responderemos lo más pronto posible
                    </div>
                    <div className="col-1"></div>

                    <form className="col-12" ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-1 margin-b5vm"></div>
                            <div className="col-3 text-f align-l">NOMBRE:</div>
                            <div className="col-1"></div>
                            <div className="col-6">
                                <input
                                    id="nombre-email"
                                    name="user_name"
                                    className="form-control input-f"
                                    type="text"
                                    required
                                ></input>
                            </div>
                            <div className="col-1"></div>

                            <div className="col-1 margin-b5vm"></div>
                            <div className="col-3 text-f align-l">
                                CORREO ELECTRÓNICO:
                            </div>
                            <div className="col-1"></div>
                            <div className="col-6">
                                <input
                                    id="email-send"
                                    name="user_email"
                                    className="form-control input-f"
                                    type="email"
                                    required
                                ></input>
                            </div>
                            <div className="col-1"></div>

                            <div className="col-1 margin-b2vm"></div>
                            <div className="col-3 text-f align-l margin-b2vm">
                                MENSAJE:
                            </div>
                            <div className="col-1 margin-b2vm"></div>
                            <div className="col-6 margin-b2vm">
                                <textarea
                                    id="message-email"
                                    name="message"
                                    className="form-control area-f"
                                    required
                                ></textarea>
                            </div>
                            <div className="col-1 margin-b2vm"></div>

                            <div className="col-10"></div>
                            <div className="col-2">
                                <button type="submit" className="btn btn-primary boton">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// if (document.getElementById('contact')) {
//     ReactDOM.render(<Contact />, document.getElementById('contact'));
// }

// export default Contact;
export default () => {
    const form = useRef();
    return (
        <Contact form={form} />
    )
    }
