import React, {useEffect, useLayoutEffect} from 'react';
import './style.css'

const Navbar = (props) => {
    useEffect(()=>{
        props.setBarsHeight(document.querySelector('.bars').offsetHeight-4);
    });

    window.addEventListener('resize', ()=>{
        props.setBarsHeight(document.querySelector('.bars').offsetHeight-4);
    });

    const randomize = () =>{
        if(!props.sorting){
            props.setSorted(false);
            props.setBarsHeight(document.querySelector('.bars').offsetHeight-4)
            props.setBarsGeneratedHeight(props.barsHeight);
            document.querySelectorAll('.bar').forEach(element=>{
                element.classList.remove('sortedBar');
            });
            props.setSampleSize(document.getElementById('samplesize').value);
            const size = document.getElementById('samplesize').value;
            const newSample = [];
            var i;
            for(i=0; i<size; i++){
                newSample.push(Math.floor(Math.random() * props.barsHeight));
            }
            props.setSample([...newSample]);
        }
    }
    useLayoutEffect(()=>{
        props.setBarsHeight(document.querySelector('.bars').offsetHeight-4);
    }, []);

    window.onload=()=>{
        randomize();
    }; //randomize sampleSet on load

    return (
        <>
            <div className="navbody">
                <nav className="navbar">
                    <div className="logo block1">
                        <h4>Bubble Sort Visualization</h4>
                    </div>
                    <div className="block2">
                        <div className="slidercontainer block2a">
                            <div className="slider">
                                <div>
                                    Size and Speed
                                </div>
                                <div>
                                    <input className={`${props.sorting?'disabledSlider':''}`} disabled={`${props.sorting?'disabled':''}`} type="range" min="20" max="200" defaultValue="20" id = "samplesize" onChange={randomize}/>
                                </div>
                            </div>
                            <div>
                                <a className={`${props.sorting?'disabledRandomizeButton':'randomizeButton'}`} onClick={randomize}>RANDOMIZE ARRAY</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
