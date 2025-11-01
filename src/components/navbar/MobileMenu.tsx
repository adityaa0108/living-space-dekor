import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from './menuData';

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, isOpen, onClose }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const location = useLocation();

  const toggleSubmenu = (id: number) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-6 overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-600 hover:text-gray-900"
        aria-label="Close menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <ul className="space-y-4 py-4">
        {menuItems.map((item) => (
          <li key={item.id} className="border-b border-gray-100">
            <div className="flex items-center justify-between py-3">
              <Link
                to={item.link}
                className={`block w-full text-lg ${
                  location.pathname === item.link ? 'text-secondary' : 'text-gray-800'
                }`}
                onClick={onClose}
              >
                {item.title}
              </Link>
              {item.has_dropdown && (
                <button
                  onClick={() => toggleSubmenu(item.id)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                  aria-expanded={activeSubmenu === item.id}
                  aria-label={`Toggle ${item.title} submenu`}
                >
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      activeSubmenu === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>
            {item.has_dropdown && item.sub_menus && (
              <ul
                className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                  activeSubmenu === item.id ? 'max-h-96 py-2' : 'max-h-0'
                }`}
              >
                {item.sub_menus.map((subMenu, index) => (
                  <li key={index} className="py-1">
                    <Link
                      to={subMenu.link}
                      className="block py-2 text-gray-600 hover:text-secondary transition-colors"
                      onClick={onClose}
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
    </div>
  );
};

export default MobileMenu;
