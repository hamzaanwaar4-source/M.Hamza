import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    // Only used to remove class on mount if needed
    containerRef.current.forEach((container) => {
      if (container) {
        container.classList.remove("what-noTouch");
      }
    });
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
            onClick={(e) => handleClick(e.currentTarget)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>AI & AUTOMATION</h3>
                <h4>RAG & Agentic Workflows</h4>
                <p>
                  Specializing in AI integrations and RAG pipelines using 
                  LangChain and OpenAI, to workflow automation with n8n, 
                  Make.com, and VAPI — I turn complex requirements into 
                  systems that run 24/7 without manual intervention.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-skillset">
                  <div className="what-content-flex">
                    <div className="what-tags">LLMs & Agents</div>
                    <div className="what-tags">LangChain</div>
                    <div className="what-tags">LlamaIndex</div>
                    <div className="what-tags">RAG Pipelines</div>
                    <div className="what-tags">Claude / OpenAI</div>
                    <div className="what-tags">Vector DBs</div>
                    <div className="what-tags">VAPI / Retell AI</div>
                    <div className="what-tags">n8n / Zapier</div>
                    <div className="what-tags">Make.com</div>
                  </div>
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
            <div
              className="what-content what-noTouch"
              ref={(el) => setRef(el, 1)}
              onClick={(e) => handleClick(e.currentTarget)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>BACK-END & SCALE</h3>
                <h4>Scalable Systems</h4>
                <p>
                  I build solid Django and FastAPI backends with PostgreSQL, 
                  Redis, and MongoDB that scale without breaking. Focused on 
                  high performance, security, and end-to-end delivery.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-skillset">
                  <div className="what-content-flex">
                    <div className="what-tags">Python / Django</div>
                    <div className="what-tags">FastAPI</div>
                    <div className="what-tags">Docker / AWS</div>
                    <div className="what-tags">Redis / Celery</div>
                    <div className="what-tags">PostgreSQL / MongoDB</div>
                    <div className="what-tags">Apache Kafka</div>
                    <div className="what-tags">Elasticsearch</div>
                    <div className="what-tags">NumPy / Pandas</div>
                  </div>
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
