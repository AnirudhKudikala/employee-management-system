import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 border-r p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/">Dashboard</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;