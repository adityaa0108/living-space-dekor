import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from './menuData';

interface NavMenuProps {
  menuItems: MenuItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ menuItems }) => {
  return (
    <ul className="main-menu flex items-center space-x-8">
      {menuItems.map((item) => (
        <li 
          key={item.id} 
          className={`relative group ${item.has_dropdown ? 'has-dropdown' : ''}`}
        >
          <Link 
            to={item.link} 
            className="text-primary-foreground hover:text-secondary transition-colors flex items-center gap-1"
          >
            {item.title}
            {item.has_dropdown && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>
          {item.has_dropdown && item.sub_menus && (
            <ul className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              {item.sub_menus.map((subMenu, index) => (
                <li key={index}>
                  <Link 
                    to={subMenu.link}
                    className="block px-4 py-3 text-gray-800 hover:bg-secondary/10 transition-colors"
                  >
                    {subMenu.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
