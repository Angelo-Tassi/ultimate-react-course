import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* should contain one skill component for each skill created         */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="angelotax.png" alt="profilepic" />;
}
function Intro() {
  return (
    <div>
      <h1>Angelo Tassi</h1>
      <p>
        "Hey there! I'm Angelo, and I'm thrilled to be on the path to becoming a
        React developer. I've always been fascinated by web development, and
        React's reputation for building fast and interactive user interfaces has
        captured my attention. I'm eager to dive into the world of virtual DOM,
        JSX, and component-based architecture. I understand that practice and
        hands-on experience are key, so I'm excited to start building small
        projects and exploring the vast React ecosystem. With dedication, a
        passion for learning, and the support of the React community, I'm
        confident that I can become a proficient React developer. Join me on
        this exciting journey as I unlock the power of React and bring my web
        development skills to the next level!"
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👌" color="violet" />
      <Skill skill="HTML+CSS" emoji="💪" color="yellow" />
      <Skill skill="Javascript" emoji="👍" color="red" />
      <Skill skill="Web-Design" emoji="🤟" color="green" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
