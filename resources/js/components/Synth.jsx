// import React, { Component, useState } from "react";
// import { Song, Track, Instrument, Effect } from "reactronica";
// import PianoRoll from 'react-piano-roll';

// class Synth extends Component {
//     render() {
//         const [isPlaying, setIsPlaying] = useState(false);
//         const currentStepIndex = this.currentStepIndex;
//         const setCurrentStepIndex = this.setCurrentStepIndex;
//         const steps = this.steps;
//         const setSteps = this.setSteps;

//         return (
//             <div className="contact">
//                 <button onClick={() => setIsPlaying(!isPlaying)}>
//                     {isPlaying ? "Play" : "Stop"}
//                 </button>

//                 <PianoRoll
//                     currentStepIndex={currentStepIndex}
//                     onClick={(steps) => setSteps(steps)}
//                 />

//                 {/* Reactronica Components */}
//                 <Song isPlaying={isPlaying}>
//                     <Track
//                         steps={steps}
//                         // Callback triggers on every step
//                         onStepPlay={(stepNotes, index) => {
//                             setCurrentStepIndex(index);
//                         }}
//                     >
//                         <Instrument type="polySynth" />
//                     </Track>
//                 </Song>
//             </div>
//         );
//     }
// }

// export default () => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [currentStepIndex, setCurrentStepIndex] = useState(0);
//     const [steps, setSteps] = useState([
//         ["C3", "E3", "A3"],
//         null,
//         ["C3", "E3", "G3", "B3"],
//         null,
//         ["C3", "F3", "A3"],
//         null,
//         ["D3", "G3", "B3"],
//         null,
//     ]);
//     return (
//         <Synth
//             isPlaying={isPlaying}
//             setIsPlaying={setIsPlaying}
//             currentStepIndex={currentStepIndex}
//             setCurrentStepIndex={setCurrentStepIndex}
//             steps={steps}
//             setSteps={setSteps}
//         />
//     );
// };

// function Synth() {
//     const [audioContext, setAudioContext] = useState(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [currentStepIndex, setCurrentStepIndex] = useState(0);
//     const [steps, setSteps] = useState([
//         ["C3", "E3", "A3"],
//         null,
//         ["C3", "E3", "G3", "B3"],
//         null,
//         ["C3", "F3", "A3"],
//         null,
//         ["D3", "G3", "B3"],
//         null,
//     ]);

//     useEffect(() => {
//         if (audioContext && isPlaying) {
//             audioContext.resume();
//         }
//     }, [audioContext, isPlaying]);

//     const handlePlayClick = () => {
//         if (!audioContext) {
//             const newAudioContext = new AudioContext();
//             setAudioContext(newAudioContext);
//         }
//         setIsPlaying(!isPlaying);
//     };

//     return (
//         <div className="contact">
//             <button onClick={handlePlayClick}>
//                 {isPlaying ? "Stop" : "Play"}
//             </button>
//             {/* <PianoRoll currentStepIndex={currentStepIndex} onClick={setSteps} /> */}
//             <PianoRoll
//                 currentStepIndex={currentStepIndex}
//                 onClick={setSteps}
//                 width={1200}
//                 height={660}
//                 zoom={6}
//                 resolution={2}
//                 gridLineColor={0x333333}
//                 blackGridBgColor={0x1e1e1e}
//                 whiteGridBgColor={0x282828}
//                 noteData={[
//                     ["0:0:0", "F5", ""],
//                     ["0:0:0", "C4", "2n"],
//                     ["0:0:0", "D4", "2n"],
//                     ["0:0:0", "E4", "2n"],
//                     ["0:2:0", "B4", "4n"],
//                     ["0:3:0", "A#4", "4n"],
//                     ["0:0:0", "F2", ""],
//                 ]}
//             />
//             ;{/* Reactronica Components */}
//             {audioContext && (
//                 <Song isPlaying={isPlaying} audioContext={audioContext}>
//                     <Track
//                         steps={steps}
//                         onStepPlay={(stepNotes, index) => {
//                             setCurrentStepIndex(index);
//                         }}
//                     >
//                         <Instrument type="polySynth" />
//                     </Track>
//                 </Song>
//             )}
//         </div>
//     );
// }

// export default Synth;

import { Piano } from "./Piano/Piano.js";
import { useEffect, useState } from "react";
import { Song, Track, Instrument } from "reactronica";
import PianoRoll from "react-piano-roll";
import nota from "../../img/corchete.png";
import nota2 from "../../img/medioC.png";
import nota3 from "../../img/sol.png";

function Synth() {
    const [flag, setFlag] = useState(false);

    function Notas() {
        if (flag) {
            return (
                <div className="col-5 margin-t2vm text-fs">
                    C2 -> Q | 
                    C2# -> 2 |   
                    D2 -> W |   
                    D#2 -> 3 |   
                    E2 -> E |   
                    F2 -> R |   
                    F#2 -> 5 | 
                    G2 -> T |   
                    G#2 -> 6 | 
                    A2 -> Y |   
                    A#2 -> 7 | 
                    B2 -> U | 
                    C3 -> Z | 
                    C#3 -> S | 
                    D3 -> X | 
                    D#3 -> D | 
                    E3 -> C | 
                    F3 -> V | 
                    F#3 -> G | 
                    G3 -> B | 
                    G#3 -> H | 
                    A3 -> N | 
                    A#3 -> J |
                    B3 -> M | 
                    C4 -> K | 
                    C#4 -> I | 
                    D4 -> 8 | 
                    D#4 -> L |
                    E4 -> O | 
                    F4 -> 9 | 
                    F#4 -> Ñ |
                    G4 -> P | 
                    G#4 -> 0 | 
                    A4 -> - | 
                    A#4 -> + | 
                    B4 -> ¿ 

                </div>
            );
        }
        return <div></div>;
    }
    const handleClick = () => {
        setFlag(!flag);
    };
    return (
        <div className="contact">
            <div className="row d-flex">
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
                <div className="col-4 text-title middle">PIANO VIRTUAL</div>
                <div className="col-4"></div>

                <div className="col-1"></div>
                <div className="col-10 text-center">
                    <Piano />
                </div>
                <div className="col-1"></div>

                <div className="col-4 text-fs margin-t2vm">
                    Aquí podrás practicar todo lo aprendido de una forma más
                    didáctica. Usa el teclado para tocar las notas, ¡Y
                    diviertete componiendo música! (Recuerda desactivar el Bloc Mayus)
                </div>
                <div className="col-2 margin-t2vm">
                    <button className="btn-primary" onClick={handleClick}>
                        Ver teclas
                    </button>
                </div>
                <Notas />
            </div>
        </div>
    );
}

export default Synth;
