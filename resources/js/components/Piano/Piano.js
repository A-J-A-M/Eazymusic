import _ from "lodash";
import React from "react";

import "./Piano.css";
import { Key } from "./Key.js";
import { NOTES, VALID_KEYS, KEY_TO_NOTE } from "./constants";

import a3 from "./notes/A3Piano.mp3";
import af3 from "./notes/Ab3Piano.mp3";
import b3 from "./notes/B3Piano.mp3";
import bf3 from "./notes/Bb3Piano.mp3";
import c3 from "./notes/C3Piano.mp3";
import d3 from "./notes/D3Piano.mp3";
import df3 from "./notes/Db3Piano.mp3";
import e3 from "./notes/E3Piano.mp3";
import ef3 from "./notes/Eb3Piano.mp3";
import f3 from "./notes/F3Piano.mp3";
import g3 from "./notes/G3Piano.mp3";
import gf3 from "./notes/Gb3Piano.mp3";

import a2 from "./notes/A2Piano.mp3";
import af2 from "./notes/Ab2Piano.mp3";
import b2 from "./notes/B2Piano.mp3";
import bf2 from "./notes/Bb2Piano.mp3";
import c2 from "./notes/C2Piano.mp3";
import d2 from "./notes/D2Piano.mp3";
import df2 from "./notes/Db2Piano.mp3";
import e2 from "./notes/E2Piano.mp3";
import ef2 from "./notes/Eb2Piano.mp3";
import f2 from "./notes/F2Piano.mp3";
import g2 from "./notes/G2Piano.mp3";
import gf2 from "./notes/Gb2Piano.mp3";

import a4 from "./notes/A4Piano.mp3";
import af4 from "./notes/Ab4Piano.mp3";
import b4 from "./notes/B4Piano.mp3";
import bf4 from "./notes/Bb4Piano.mp3";
import c4 from "./notes/C4Piano.mp3";
import d4 from "./notes/D4Piano.mp3";
import df4 from "./notes/Db4Piano.mp3";
import e4 from "./notes/E4Piano.mp3";
import ef4 from "./notes/Eb4Piano.mp3";
import f4 from "./notes/F4Piano.mp3";
import g4 from "./notes/G4Piano.mp3";
import gf4 from "./notes/Gb4Piano.mp3";

class Piano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }
    notes = [
        c2,
        df2,
        d2,
        ef2,
        e2,
        f2,
        gf2,
        g2,
        af2,
        a2,
        bf2,
        b2,
        c3,
        df3,
        d3,
        ef3,
        e3,
        f3,
        gf3,
        g3,
        af3,
        a3,
        bf3,
        b3,
        c4,
        df4,
        d4,
        ef4,
        e4,
        f4,
        gf4,
        g4,
        af4,
        a4,
        bf4,
        b4,
    ];

    playNote = (note) => {
        if (!_.isEmpty(note)) {
            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.play();
        }
    };

    handleKeyDown = (event) => {
        if (event.repeat) {
            return;
        }
        const key = event.key;
        const updatedPressedKeys = [...this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[key]);
    };

    handleKeyUp = (event) => {
        const index = this.state.pressedKeys.indexOf(event.key);
        if (index > -1) {
            this.setState((state) => ({
                pressedKeys: state.pressedKeys.splice(index, 1),
            }));
        }
    };

    componentDidMount = () => {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
    };

    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key
                    key={index}
                    note={note}
                    pressedKeys={this.state.pressedKeys}
                />
            );
        });

        const audioFiles = _.map(NOTES, (note, index) => {
            return (
                <audio id={note} key={index} src={this.notes[Number(index)]} />
            );
        });

        return (
            <div>
                <div className="piano">{keys}</div>
                <div>{audioFiles}</div>
            </div>
        );
    }
}

export { Piano };
