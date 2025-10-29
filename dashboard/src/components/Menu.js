import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("/");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  // Update active path when location changes
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const menuItems = [
    { path: "/", label: "Dashboard" },
    { path: "/orders", label: "Orders" },
    { path: "/holdings", label: "Holdings" },
    { path: "/positions", label: "Positions" },
    { path: "/funds", label: "Funds" },
    { path: "/apps", label: "Apps" },
  ];

  const isActive = (path) => {
    return activePath === path ? "menu selected" : "menu";
  };

  const handleLogout = async (e) => {
    e.stopPropagation(); // Prevent event bubbling
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const toggleProfileDropdown = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    e.nativeEvent.stopImmediatePropagation(); // Prevent document click handler
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling for menu items
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isProfileDropdownOpen) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  return (
    <div className="menu-container" style={{ 
      position: 'relative',
      zIndex: 100,
      backgroundColor: 'white',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
        <div className="menus" style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0,
            alignItems: 'center'
          }}>
            {menuItems.map((menuItem, index) => (
              <li 
                key={index} 
                onClick={handleMenuClick}
                style={{ margin: '0 10px' }}
              >
                <Link
                  to={menuItem.path}
                  style={{ 
                    textDecoration: 'none',
                    color: isActive(menuItem.path).includes('selected') ? '#f6851b' : '#333',
                    fontWeight: 500,
                    padding: '15px 5px',
                    display: 'block',
                    position: 'relative',
                    '&:hover': {
                      color: '#f6851b'
                    }
                  }}
                >
                  {menuItem.label}
                  {isActive(menuItem.path).includes('selected') && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#f6851b',
                      borderRadius: '3px 3px 0 0'
                    }} />
                  )}
                </Link>
              </li>
            ))}
            <li style={{ 
              display: 'inline-block', 
              margin: '0 15px',
              height: '30px',
              alignSelf: 'center'
            }}>
              <div style={{ 
                width: '1px', 
                height: '100%', 
                backgroundColor: '#e0e0e0'
              }} />
            </li>
          </ul>
          <div 
            className="profile" 
            onClick={toggleProfileDropdown}
            style={{ 
              position: 'relative', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 12px',
              borderRadius: '4px',
              transition: 'background-color 0.2s',
              marginLeft: '10px'
            }}
          >
            <div className="avatar" style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#2962ff',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '8px',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              {currentUser?.name?.[0]?.toUpperCase() || 'U'}
            </div>
            <p className="username" style={{ 
              margin: 0, 
              fontWeight: 500,
              color: '#333',
              fontSize: '14px'
            }}>
              {currentUser?.name || 'User'}
            </p>
            
            {isProfileDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 5px)',
                right: 0,
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                borderRadius: '6px',
                padding: '8px 0',
                minWidth: '200px',
                zIndex: 1100,
                border: '1px solid #eee'
              }}>
                <div style={{ 
                  padding: '10px 16px',
                  color: '#666',
                  fontSize: '14px',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  {currentUser?.email || ''}
                </div>
                <div 
                  style={{ 
                    padding: '10px 16px', 
                    cursor: 'pointer',
                    color: '#e53935',
                    fontWeight: 500,
                    fontSize: '14px',
                    '&:hover': {
                      backgroundColor: '#f5f5f5'
                    }
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;