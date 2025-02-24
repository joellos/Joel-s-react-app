import React, { useState } from "react";

const Home = () => {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div>
      <section id="home">
        <div className="selfieBox">
          <img
            src="https://media.istockphoto.com/id/1619037808/sv/foto/empty-wooden-photo-frame-on-white-background.jpg?s=612x612&w=0&k=20&c=5uK22VatgRbzJgxvTbo0z4sNKE8LTg7ZBHmyJsYiM_o="
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
