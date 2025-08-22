import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon, type IconName } from '@bodewell/ui';
import { motion, AnimatePresence } from 'framer-motion';

export interface NavItem {
  label: string;
  href: string;
  icon?: IconName;
  children?: NavItem[];
}

interface LocalSideNavProps {
  navItems: NavItem[];
  className?: string;
}

const LocalSideNav: React.FC<LocalSideNavProps> = ({ navItems, className }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // Effect to expand the current section based on the URL path
  useEffect(() => {
    const currentParent = navItems.find(item => item.children && location.pathname.includes(`/styleguide/${item.href}`));
    if (currentParent) {
      setExpandedItems(prev => ({ ...prev, [currentParent.href]: true }));
    }
  }, [location.pathname, navItems]);

  const handleToggle = (href: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [href]: !prev[href],
    }));
  };
  
  const childNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 text-sm transition-colors duration-200 ${
      isActive
        ? 'text-primary font-medium'
        : 'text-muted-foreground hover:text-text'
    }`;
  
  const renderNavLinks = (items: NavItem[], isChild = false) => {
    return items.map(item => {
      // Check if this parent item is expanded
      const isExpanded = !!expandedItems[item.href];

      // --- Parent Item (with children) ---
      if (item.children) {
        return (
          <li key={item.href}>
            <button
              onClick={() => handleToggle(item.href)}
              className="flex w-full items-center justify-between gap-2 font-medium text-text transition-colors duration-200 hover:text-primary"
            >
              <span className="flex items-center gap-2">
                {item.icon && <Icon name={item.icon} className="h-4 w-4" />}
                <span>{item.label}</span>
              </span>
              <Icon
                name="chevron-right"
                className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.ul
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="space-y-2 overflow-hidden border-l border-border pl-4 pt-2 pb-2 ml-3"
                >
                  {renderNavLinks(item.children, true)}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        );
      }
      
      // --- Child or Regular Item (no children) ---
      return (
        <li key={item.href}>
          <NavLink
            to={item.href}
            className={childNavLinkClasses}
          >
            {item.label}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <nav className={`sticky top-8 w-full md:w-56 ${className || ''}`}>
      <ul className="space-y-4">
        {renderNavLinks(navItems)}
      </ul>
    </nav>
  );
};

export default LocalSideNav;