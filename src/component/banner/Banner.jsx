import React from "react";
import "./banner.css";

const Banner = () => {
    // truncate the banner description

    const truncate = (string,cutFromThisChar)=>{
        return (
            string?.length > cutFromThisChar ? string.substr(0 , cutFromThisChar-1) + '....' : string
        )
    }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://thumbs.dreamstime.com/b/netflix-logo-18627628.jpg)`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
            {truncate(`
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae perspiciatis ullam velit, dolorem, natus eveniet ipsa nulla laudantium assumenda nam nobis a nisi voluptates illum temporibus laborum debitis minima? Blanditiis quisquam et alias unde quam quidem eveniet iste tenetur eius, temporibus aut ex id voluptas ipsa veniam quas aliquid?
            `,150)
            }
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
