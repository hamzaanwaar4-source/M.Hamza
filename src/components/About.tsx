import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Muhammad Hamza Anwaar, a Backend Engineer specializing in AI & Voice
          Automation with 14+ months of production experience. I build scalable REST APIs,
          AI pipelines, and distributed systems using Python, FastAPI, and Django.
          I've shipped 12+ production endpoints and a real-time Workday HR voice bot.
          My expertise includes LangChain, vector databases (Pinecone/Chroma), and
          RAG pipelines, focused on delivering high-impact autonomous solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
