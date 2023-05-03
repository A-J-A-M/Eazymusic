// resources/js/components/Todoteca.jsx

import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "../../css/bootstrap.min.css";
import "../../css/app.css";
import nota from "../../img/corchete.png";
import nota2 from "../../img/medioC.png";
import nota3 from "../../img/sol.png";

class Todoteca extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: [],
            type: [],
            media: [],
            selected: [],
        };
        this.search = this.search.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.afterClick = this.afterClick.bind(this);
    }
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

    async componentDidMount() {
        window.addEventListener("scroll", this.reveal);
        this.reveal();
        this.zero();
        this.dataBox();
    }
    async dataBox() {
        const responseLevel = await fetch("http://127.0.0.1:8000/api/v1/level");
        const jsonDataLevel = await responseLevel.json();

        const responseType = await fetch("http://127.0.0.1:8000/api/v1/type");
        const jsonDataType = await responseType.json();

        const responseMedia = await fetch("http://127.0.0.1:8000/api/v1/media");
        const jsonDataMedia = await responseMedia.json();

        const { selected } = this.state;
        this.setState({
            level: jsonDataLevel,
            type: jsonDataType,
            media: jsonDataMedia,
            selected: selected,
        });
    }
    async search() {
        try {
            const responseLevel = await fetch(
                "http://127.0.0.1:8000/api/v1/level"
            );
            const jsonDataLevel = await responseLevel.json();

            const responseType = await fetch(
                "http://127.0.0.1:8000/api/v1/type"
            );
            const jsonDataType = await responseType.json();

            var data = document.getElementById("search");
            if (data.value == "") {
                const responseMedia = await fetch(
                    "http://127.0.0.1:8000/api/v1/media"
                );
                const jsonDataMedia = await responseMedia.json();

                const { selected } = this.state;
                this.setState({
                    level: jsonDataLevel,
                    type: jsonDataType,
                    media: jsonDataMedia,
                    selected: selected,
                });
                console.log("XDD Arriba");
            } else {
                const { selected } = this.state;
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": document
                            .querySelector('meta[name="csrf-token"]')
                            .getAttribute("content"),
                    },
                    body: JSON.stringify({
                        levels: selected,
                    }),
                };
                console.log(requestOptions);
                const responseMedia = await fetch(
                    "http://127.0.0.1:8000/api/v1/media/search/" + data.value,
                    requestOptions
                );
                const jsonDataMedia = await responseMedia.json();
                console.log(jsonDataMedia);
                this.setState({
                    level: jsonDataLevel,
                    type: jsonDataType,
                    media: jsonDataMedia,
                    selected: selected,
                });
                console.log("XDD");
            }
        } catch (error) {
            console.log(error);
        }
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async handleCheckboxChange(event) {
        event.preventDefault();
        await this.sleep(100);
        event.target.checked = !event.target.checked;
        await this.sleep(100);
        const targetId = event.target.value;
        const { level } = this.state;
        const { type } = this.state;
        const { media } = this.state;
        if (event.target.checked) {
            this.setState({
                level: level,
                type: type,
                media: media,
                selected: [...this.state.selected, targetId],
            });
            console.log("Perro");
        } else {
            this.setState({
                level: level,
                type: type,
                media: media,
                selected: this.state.selected.filter(
                    (item) => item !== targetId
                ),
            });
            console.log("Gato");
        }
    }
    async afterClick(event) {
        await this.sleep(1000);
        event.target.checked = !event.target.checked;
    }

    render() {
        var { level } = this.state;
        var { type } = this.state;
        var { media } = this.state;

        const List = () => {
            // const datos = this.props.datos;
            if (level.data != undefined) {
                return (
                    <div id="levelList">
                        {level.data.map((item) => (
                            <div className="form-check margin-l2vm">
                                <input
                                    className="form-check-input radio-s"
                                    type="checkbox"
                                    value={item.difficulty}
                                    id={item.name}
                                    onClick={(event) =>
                                        this.handleCheckboxChange(event)
                                    }
                                    onMouseUp={(event) =>
                                        this.afterClick(event)
                                    }
                                />
                                <label
                                    className="form-check-label text-fs"
                                    for={item.name}
                                >
                                    {item.name}
                                </label>
                            </div>
                        ))}
                    </div>
                );
            }
            return <div></div>;
        };
        function ListG() {
            if (type.data != undefined) {
                return (
                    <div id="typeList">
                        {type.data.map((item) => (
                            <div className="form-check margin-l2vm">
                                <input
                                    className="form-check-input radio-s"
                                    type="checkbox"
                                    id={item.id}
                                />
                                <label
                                    className="form-check-label text-fs"
                                    for={item.name}
                                >
                                    {item.name}
                                </label>
                            </div>
                        ))}
                    </div>
                );
            }
            return <div></div>;
        }

        function DataTable() {
            const [showModal, setShowModal] = useState(false);
            const [selectedItem, setSelectedItem] = useState(null);

            const handleClick = (event, item) => {
                if (item.outside) {
                    event.preventDefault();
                    setSelectedItem(item);
                    setShowModal(true);
                }
            };
            const handleModalYesClick = () => {
                window.open(selectedItem.url, "_blank");
                setShowModal(false);
                setSelectedItem(null);
            };

            const handleModalNoClick = () => {
                setShowModal(false);
                setSelectedItem(null);
            };
            if (media.data != undefined) {
                if (media.data.length == 0) {
                    return (
                        <tbody id="tableBody">
                            <tr>
                                <td></td>
                                <td>
                                    <div className="fontable text-center middle">
                                        No hay resultados de su búsqueda
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    );
                }
                return (
                    <tbody id="tableBody">
                        {media.data.map((item) => (
                            <tr className="rowcol" id={item.url}>
                                <td className="colsize border-t pad-0">
                                    <div className="fontable text-center middle">
                                        {item.title}
                                    </div>
                                </td>
                                <td className="colsize border-t pad-0">
                                    <div className="fontable text-center middle">
                                        {item.description}
                                    </div>
                                </td>
                                <td className="colsize border-t pad-0">
                                    <div className="fontable text-center middle">
                                        {item.level.name}
                                    </div>
                                </td>
                                <td className="colsize border-t pad-0">
                                    <a
                                        className="fontable text-center middle"
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        onClick={(event) =>
                                            handleClick(event, item)
                                        }
                                    >
                                        <div className="fontable text-center middle link">
                                            Ver link
                                        </div>
                                    </a>
                                </td>
                            </tr>
                        ))}
                        <div className="modal">
                            <Modal
                                isOpen={showModal}
                                onRequestClose={() => setShowModal(false)}
                                className="modal-content"
                            >
                                <div>
                                    <p>
                                        El link es de una página de terceros,
                                        ¿Desea continuar de todas formas?
                                    </p>
                                    <button onClick={handleModalYesClick}>
                                        Sí
                                    </button>
                                    <button onClick={handleModalNoClick}>
                                        No
                                    </button>
                                </div>
                            </Modal>
                        </div>
                    </tbody>
                );
            }
            return (
                <tbody>
                    <td></td>
                    <td className="fontable text-center middle">
                        
                    </td>
                    <td></td>
                </tbody>
            );
        }

        return (
            <div className="contact">
                <div className="row reveal d-flex">
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
                    <div className="col-4 text-title middle">TODOTECA</div>
                    <div className="col-4"></div>

                    <div className="col-3">
                        <div className="text-f text-center">
                            ¿Qué quiere buscar?
                        </div>
                        <div className="d-flex">
                            <input
                                id="search"
                                name="search"
                                className="form-control input-buscar inblock"
                                type="text"
                                required
                            ></input>
                            <button
                                type="submit"
                                className="btn btn-primary boton-buscar inblock"
                                onClick={this.search}
                            >
                                Buscar
                            </button>
                        </div>
                        <div className="text-f text-center">¿Qué es?</div>
                        <div className="text-fs">
                            Es el lugar en donde puedes acudir para encontrar
                            todo el material de estudio, solo tienes que buscar
                            el tema que te interese, ¡Y te mostraremos todo el
                            material disponible para que puedas empezar a
                            aprender lo más pronto posible!
                        </div>

                        {/* <div className="text-f">FILTROS</div>

                        <div className="text-fl margin-l1vm">DIFICULTAD</div>

                        <List/>

                        <div className="text-fl margin-l1vm">
                            TIPO DE MATERIAL
                        </div>

                        <ListG /> */}
                    </div>
                    <div className="col-9 d-flex margin-l1-5vm-n">
                        <table className="table sizetable border-t">
                            <thead>
                                <tr>
                                    <th className="colsize headcol">
                                        <div className="fontable-h text-center">
                                            Título
                                        </div>
                                    </th>
                                    <th className="colsize headcol">
                                        <div className="fontable-h text-center">
                                            Descripción
                                        </div>
                                    </th>
                                    <th className="colsize headcol">
                                        <div className="fontable-h text-center">
                                            Dificultad
                                        </div>
                                    </th>
                                    <th className="colsize headcol">
                                        <div className="fontable-h text-center">
                                            Material
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <DataTable />
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todoteca;
