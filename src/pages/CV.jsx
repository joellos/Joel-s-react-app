import { useState, useEffect } from "react";

const CV = () => {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    const jsonUrl = `${import.meta.env.BASE_URL}cv.json`;

    console.log("Fetching CV data from:", jsonUrl); // ✅ Logga URL för att se om den är rätt
  
    fetch(jsonUrl)
   
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCvData(data))
      .catch((error) => console.error("Error loading CV data:", error));
  }, []);
  


  

  if (!cvData) return <section><p>Loading...</p></section>;

  return (
    <section id="cv">
      <h1  onClick={(e) => document.body.style.backgroundColor = "red"}>CV</h1>

      {/* Utbildning */}
      <div className="cv-container">
      <div className="school-list">
      <div className="school-title">
      <i className='bx bxs-graduation'></i>
        <h2>Education</h2>
        </div>
        {cvData.education.map((edu, index) => (
          <div key={index} className="cv-item">
            <h3>{edu.degree}</h3>
            <p><strong>{edu.school}</strong></p>
            <p>{edu.years}</p>
          </div>
        ))}
      </div>

      {/* Arbetslivserfarenhet */}
      <div className="school-list">
        <div className="school-title">
        <i className='bx bxs-graduation'></i>
        <h2>Experience</h2>
        </div>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="cv-item">
            <h3>{exp.title}</h3>
            <p>{exp.years}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default CV;