import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-base-200">
      <div className="navbar mx-auto max-w-5xl">
        <div className="navbar-start">
          <Link to="/" className="btn btn-secondary text-2xl font-bold">
            TODOS
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <Link to="/create" className="link link-primary">
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
