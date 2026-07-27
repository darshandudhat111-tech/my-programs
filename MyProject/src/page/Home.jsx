import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <div className="home">

      <h1 className="heading">React Practical</h1>

      <div className="card-container">

        <Link to="/counter" className="card">
          <h2>P1</h2>
          <p>Counter</p>
        </Link>

        <Link to="/calculator" className="card">
          <h2>P2</h2>
          <p>Calculator</p>
        </Link>

        <Link to="/Register" className="card">
          <h2>P3</h2>
          <p>Register</p>
        </Link>

        <Link to="/Prog4" className="card">
          <h2>P4</h2>
          <p>Hello</p>
        </Link>

        <Link to="/Prog5" className="card">
          <h2>P5</h2>
          <p>Image</p>
        </Link>

        <Link to="/Prog6" className="card">
          <h2>P6</h2>
          <p>Todo</p>
        </Link>

        <Link to="/simplecalc" className="card">
          <h2>P7</h2>
          <p>Simple Calculator</p>
        </Link>

        <Link to="/UserList" className="card">
          <h2>P8</h2>
          <p>Fetch Users API</p>
        </Link>

      </div>

    </div>
  );
}

export default Home;