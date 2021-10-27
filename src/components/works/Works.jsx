import { useState } from "react";
import "./works.scss"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "https://icons.veryicon.com/png/o/business/purchase-sale-and-inventory-management/coding-scheme.png",
            title: "Dashboard Application",
            desc:
              "This dashboard application was created using React, Material UI, Recharts, and React Router. Back end is not completed yet! ",
            img:
              "https://i.imgur.com/T7JP0Ox.png",
          },
          {
            id: "2",
            icon: "https://image.flaticon.com/icons/png/512/900/900782.png",
            title: "Who Wants to be a Millionaire?",
            desc:
              "This quiz application was created using React and Material-UI.",
            img:
              "https://www.microids.com/wp-content/uploads/2020/10/WhoWantsToBeAMillionaire_keyart.jpg",
          },
          {
            id: "3",
            icon: "https://image.flaticon.com/icons/png/512/757/757257.png",
            title: "Maps Application",
            desc:
              "A Map Application developed using MongoDB, Express, React, Node, HTML, CSS, Javascript, Git, and the Mapbox API. The application allows for the user to sign up for an account and then login. After login, the user can drop a pin anywhere on the map of the world and give the spot a rating and a review. Only a screenshot is available, for now!",
            img:
              "https://i.imgur.com/20ljXgi.png",
          },

    ];

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };
    return (
        <div className="works" id="works">
            <div className="slider"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                   <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}
                                </p>

                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img}
                            alt="" />
                        </div>
                    </div>
                </div>))}
            </div>

            <img src="https://image.flaticon.com/icons/png/512/892/892528.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
            <img src="https://image.flaticon.com/icons/png/512/892/892528.png" className="arrow right" alt="" onClick={() => handleClick()}/>

        </div>
    );
}
