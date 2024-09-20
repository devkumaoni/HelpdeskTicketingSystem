import React, { children } from "react";
import "../styles/LayoutStyle.css";
import { adminMenu, userMenu } from "../Data/data";
import { Badge, message } from "antd";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  //logout function
  const handleLogout = () => {
    localStorage.clear();
    message.success("logout successfull");
    navigate("/login");
  };
  //rendering menu list
  const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;
  return (
    <>
      <div className="main">
        <div className="Layout">
          <div className="sidebar">
            <div className="logo">
              <h6>Helpdesk</h6>
              <hr />
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content" style={{ cursor: "pointer" }}>
                {" "}
                <Badge
                  count={user && user.notification.length}
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  <i class="fa-regular fa-bell"></i>
                </Badge>
                <Link to="/profile">{user && user.name}</Link>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
