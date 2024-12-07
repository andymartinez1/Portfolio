import { FaChevronRight } from "react-icons/fa";
import Resume from "../assets/files/Andrew-Martinez-Resume.pdf";

export default function About() {
  return (
    <>
      <section className="about">
        <h1>About Me</h1>
        <div className="about-section">
          <div className="about-description">
            <p>
              I&apos;m a results-oriented IT specialist with vast experience in
              software development, system installation, and technical issue
              handling. Proficient in a variety of programming languages,
              including Java, JavaScript, Python, C#, and C++, with a particular
              emphasis on full stack and back end development. Skilled at
              building and implementing REST APIs, as well as using machine
              learning and data analysis to create advanced technological
              solutions. Experienced with network infrastructure management,
              vulnerability remediation, and automation solutions for increased
              security and efficiency. Experienced in SQL and NoSQL databases,
              cloud platforms (AWS, Azure), and Agile processes for efficient
              project delivery. Proven track record of cross-functional
              cooperation, IT strategy formulation, and technical leadership in
              a variety of situations.
            </p>
          </div>
          {/* <div className="about-img">
            <img src={Headshot} alt="" />
          </div> */}
        </div>
      </section>

      <section className="core-competencies">
        <h3 className="core-competencies-title">Core Competencies</h3>
        <div className="competencies-section">
          <ul className="core-competencies-list">
            <li className="core-competencies-item">
              <strong>Full Stack Development:</strong> Java, JavaScript,
              Node.js, C#, C++, REST API Development
            </li>
            <li className="core-competencies-item">
              <strong>Front-End Development:</strong> JavaScript, HTML, CSS
            </li>
            <li className="core-competencies-item">
              <strong>Data Science & Machine Learning:</strong> Python, R, Data
              Analysis
            </li>
            <li className="core-competencies-item">
              <strong>Databases:</strong> SQL/NoSQL (MongoDB, PostgreSQL)
            </li>
            <li className="core-competencies-item">
              <strong>Cloud Computing:</strong> AWS, Azure
            </li>
            <li className="core-competencies-item">
              <strong>Business & IT Tools:</strong> Microsoft Office (Word,
              PowerPoint, Excel, Access), Google Workspace (Docs, Sheets), Power
              BI, Jira, Smartsheet
            </li>
            <li className="core-competencies-item">
              <strong>Development & Automation:</strong> Version Control (Git),
              CI/CD, Agile Methodologies, Automation Tools
            </li>
            <li className="core-competencies-item">
              <strong>Systems & Infrastructure:</strong> Network Infrastructure,
              Vulnerability Remediation, System Implementations
            </li>
            <li className="core-competencies-item">
              <strong>Problem Solving & Collaboration:</strong> Troubleshooting,
              IT Strategy & Solutions, Cross-Functional Collaboration, Technical
              Leadership
            </li>
          </ul>

          <ul className="developer-icons">
            <li className="developer-icon chrome-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original-wordmark.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg" />
            </li>
            <li className="developer-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            </li>
          </ul>
        </div>
      </section>
      <div className="resume">
        <a href={Resume}>
          <button className="resume-button">
            <p>View my full resume &nbsp;</p>
            <FaChevronRight />
          </button>
        </a>
      </div>
    </>
  );
}
