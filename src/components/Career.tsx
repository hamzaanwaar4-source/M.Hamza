import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Artificizen</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading backend development for AI-driven projects, focusing on
              scalable APIs, RAG pipelines, and agentic frameworks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance/Contract</h4>
                <h5>Remote</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Jan 2024 – Jan 2025. Built custom backend solutions and
              AI integrations for clients globally using Python, Django,
              and FastAPI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
