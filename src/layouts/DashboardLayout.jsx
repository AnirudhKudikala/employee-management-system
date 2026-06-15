import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <h2>Navbar</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div>Sidebar</div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;