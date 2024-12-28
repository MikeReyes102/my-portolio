import './Navigation.css';

function Navigation({ setActiveComponent }) {
  return (
    <div className="nav">
        <p onClick={() => setActiveComponent('Home')}>Home</p>
        <p onClick={() => setActiveComponent('About')}>About</p>
        <p onClick={() => setActiveComponent('Projects')}>Projects</p>
        <p>Resume</p>
    </div>
  );
}

export default Navigation;