import "./topbar.scss"
import {Mail, LinkedIn, GitHub, PictureAsPdf} from "@material-ui/icons"
import { Button } from "@material-ui/core"
export default function Topbar({ menuOpen , setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">victor.</a>
                    <div className="itemContainer">
                        <Button id="button1" target="_blank"
                        href="https://drive.google.com/file/d/1Rl4ZuRofWaQRqJ5xkBQfj1Drq9Z5fgfL/preview" size="medium"
                        startIcon={<PictureAsPdf/>}></Button>
                    </div>
                    <div className="itemContainer">
                        <Button className="button" target="_blank"
                        href="mailto: vbasov10@gmail.com" size="medium" startIcon={<Mail/>}></Button>
                    </div>
                    <div className="itemContainer">
                        <Button className="button" target="_blank"
                        href="https://www.linkedin.com/in/victorbasov/" size="medium" startIcon={<LinkedIn/>}></Button>
                    </div>
                    <div className="itemContainer">
                        <Button id="button4" target="_blank"
                        href="https://github.com/victor-basov" size="medium" startIcon={<GitHub/>}></Button>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>


                    </div>

                </div>

            </div>
        </div>
    )
}
