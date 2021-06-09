import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
          id: 1,
          name: "Tom",
          title: "The cat from Tom & Jerry",
          img:
            "https://i.pinimg.com/474x/6c/7b/a7/6c7ba77d107f66deaedb51bb7b5714a7.jpg",
          icon: "assets/twitter.png",
          desc:
            "When I'm not chasing that dang mouse, I'm enjoying a scrumptious souffle made by this guy.",
        },
        {
          id: 2,
          name: "The Pink Panther",
          title: "A pink, panther",
          img:
            "https://urbanmoms.ca/wp-content/uploads/2014/05/603550_10151718002252965_1269600228_n.png",
          icon: "assets/youtube.png",
          desc:
            "Ol' boy sure knows how to cook up a mean mushroom omelette!",
          featured: true,
        },
        {
          id: 3,
          name: "Scooby-Doo",
          title: "You know him",
          img:
            "https://i2.wp.com/theorkneynews.scot/wp-content/uploads/2020/09/Scooby-Doo-Where-are-You.png?resize=574%2C430&ssl=1",
          icon: "assets/linkedin.png",
          desc:
            "Feeds me the most Scooby Snax 😃",
        },
      ];



    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src={d.img} className="user" alt="" />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>

                </div>
                ))}
            </div>
        </div>
    )
}
