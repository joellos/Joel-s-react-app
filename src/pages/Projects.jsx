import { useState, useEffect } from "react";

const Portfolio = () => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/joellos/repos") // Change "joellos" to your GitHub username
      .then((response) => response.json())
      .then((data) => {
        setGithubProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub projects:", error);
        setLoading(false);
      });
  }, []);

return (
    <section id="portfolio">
        <h1  onClick={(e) => document.body.style.backgroundColor = "red"}>Portfolio</h1>

        {loading && <p>Loading GitHub projects...</p>}

        <div className="portfolio-container">
            {githubProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.name}
                    
                    language={project.language || "Unknown"}
                    githubLink={project.html_url}
                    aboutText={project.description || "No additional information available"} // Use project description as "About" text
                />
            ))}
        </div>
    </section>
);
};

const ProjectCard = ({ title, description, language, githubLink, aboutText }) => {
  const [showMore, setShowMore] = useState(false); // State to toggle the visibility of the "About" text

  const handleShowMore = () => {
    setShowMore(!showMore); // Toggle the visibility of the "About" text
  };

return (
    <div className="card">
        <h2>{title}</h2>
        <p><strong>Language:</strong> {language}</p>
        <p className="project-desc">{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="details-btn">
            View on GitHub
        </a>

        {/* Show More button */}
        <button className="show-more-btn" onClick={handleShowMore}>
            {showMore ? "Show Less" : "Show More"}
        </button>

        {/* Conditionally render the About text */}
        {showMore && <p className="about-text">{aboutText}</p>}
    </div>
);
};

export default Portfolio;