import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { featuredPortfolio,
    /*webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio*/} from "../../data"
import {Link, GitHub} from "@material-ui/icons"
import { Button } from "@material-ui/core"
export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
    {
        id: "featured",
        title: 'Featured',
    },
    {/*{
        id: "web",
        title: "Web App",
    },
    {
        id: "mobile",
        title: "Mobile App",
    },
    {
        id: "design",
        title: "Design",
    },
    {
        id: "content",
        title: "Content",
    },*/}
];

useEffect(()=>{

    switch(selected){
        case "featured":
            setData(featuredPortfolio);
            break;
        /*case "web":
            setData(webPortfolio);
            break;
        case "mobile":
            setData(mobilePortfolio);
            break;
        case "design":
            setData(designPortfolio);
            break;
        case "content":
            setData(contentPortfolio);
            break;*/
        default:
        setData(featuredPortfolio);
    }

}, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
              {list.map((item) => (
              <PortfolioList
              title={item.title}
              active ={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              githublink={item.githublink}
              linktoproject={item.linktoproject}
              />
              ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img
                    src={d.img}
                    alt=""
                    />
                    <h3>{d.title}</h3>
                    <Button id="project1github" target="_blank"
                        href={d.githublink} size="medium" startIcon={<GitHub/>}></Button>
                    <Button id="project1link" target="_blank"
                        href={d.linktoproject} size="medium" startIcon={<Link/>}></Button>
                </div>
                ))}

            </div>


        </div>
    );
}
