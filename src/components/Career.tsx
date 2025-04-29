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
                <h4>Backend Developer & AI Automation Engineer</h4>
                <h5>Artificizen</h5>
              </div>
              <h3>2025–PRESENT</h3>
            </div>
            <p>
              Architecting scalable REST APIs (FastAPI/Django) and production voice automation systems (Retell AI + GPT-4o).
              Building LangChain-powered RAG pipelines and managing distributed systems with Kafka, Redis, and Kubernetes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Merchant Intern</h4>
                <h5>Azgard 9 Ltd</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Conducted market analysis for denim product lines and coordinated cross-border shipment logistics
              within the marketing and export departments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance/Contract</h4>
                <h5>Remote</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built custom backend solutions and AI integrations for clients globally using Python, Django,
              and FastAPI, focusing on automated workflows and API design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
