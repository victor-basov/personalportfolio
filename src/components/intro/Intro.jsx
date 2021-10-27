import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

const textRef = useRef();

useEffect(()=>{
    init(textRef.current,{
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
            strings: ['Photographer 📷 ', ' Foodie 🍣', 'Web Developer at Soterix Medical 😈'],
        });

},[])

    return (
        <div className="intro" id="intro">

            <div className="left">
                <div className="imgContainer">
                    <img src="https://d.img.vision/victorassets/IMG_9491.jpg" alt="victor" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey there! I'm</h2>
                    <h1>Victor, </h1>
                    <h3>a <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="https://image.flaticon.com/icons/png/512/892/892498.png" alt="arrow" />
                </a>
            </div>
        </div>
    )
}
