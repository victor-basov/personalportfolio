import "./topbar.scss"
import {Mail, LinkedIn, GitHub, PictureAsPdf} from "@mui/icons-material"
import { Button } from "@mui/material"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">victor.</a>
                    <div className="itemContainer">
                        <Button 
                            id="button1" 
                            data-testid="button1" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Victor Basov Resume PDF"
                            href="https://pdfhost.io/v/Eje3axuz6_Victor_Basov_Winter_Resumedocx" 
                            size="medium"
                            startIcon={<PictureAsPdf/>}>
                        </Button>
                    </div>
                    <div className="itemContainer">
                        <Button 
                            className="button" 
                            data-testid="mail-button" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Send email to Victor Basov"
                            href="mailto: vbasov10@gmail.com" 
                            size="medium" 
                            startIcon={<Mail/>}>
                        </Button>
                    </div>
                    <div className="itemContainer">
                        <Button 
                            className="button" 
                            data-testid="linkedin-button" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Victor Basov LinkedIn Profile"
                            href="https://www.linkedin.com/in/victorbasov/" 
                            size="medium" 
                            startIcon={<LinkedIn/>}>
                        </Button>
                    </div>
                    <div className="itemContainer">
                        <Button 
                            id="button4" 
                            data-testid="button4" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Victor Basov GitHub Profile"
                            href="https://github.com/victor-basov" 
                            size="medium" 
                            startIcon={<GitHub/>}>
                        </Button>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" role="hamburger" data-testid="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
