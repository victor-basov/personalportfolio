import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio } from "../../data";
import { Link, GitHub } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    
    const list = [
        {
            id: "featured",
            title: 'Featured',
        }
        // Additional portfolio categories can be added here in the future
    ];

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio" data-testid="portfolio-section">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        key={item.id}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container" data-testid="portfolio-container">
                {data.map((d, index) => (
                    <div className="item" key={d.id || index} data-testid="portfolio-item">
                        <img
                            src={d.img}
                            alt={`${d.title} project thumbnail`}
                        />
                        <h3>{d.title}</h3>
                        {d.githublink && (
                            <Button 
                                data-testid="github-button"
                                aria-label={`GitHub repository for ${d.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={d.githublink} 
                                size="medium" 
                                startIcon={<GitHub/>}>
                            </Button>
                        )}
                        {d.linktoproject && (
                            <Button 
                                data-testid="project-link-button"
                                aria-label={`Live project link for ${d.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={d.linktoproject} 
                                size="medium" 
                                startIcon={<Link/>}>
                            </Button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
