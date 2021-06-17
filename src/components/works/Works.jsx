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
              "This application has not been completed yet! Come back soon for more!",
            img:
              "https://cdn.shopify.com/s/files/1/0101/2792/products/Under_Construction_copy_600x600_crop_center.jpg?v=1569104295",
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
