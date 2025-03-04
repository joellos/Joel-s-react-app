import React, { useState } from "react";
import imgSrc from '../image.png';


const Home = () => {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div>
      <section id="home">
        <div className="selfieBox">
          <img
            src={imgSrc}
            alt="myPicture"
          />
        </div>
        <h1 onClick={() => setBgColor("red")}>Home</h1>
        <div className="homeText">
          <div>
            <h2>Fullstack .NET developer studying at Chas Academy</h2>
            <p>
              I am currently studying at Chas Academy Fullstack .NET developer course.
              We work with C#, SQL, HTML, CSS, JS, and React.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
