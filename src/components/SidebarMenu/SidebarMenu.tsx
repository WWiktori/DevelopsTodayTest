import React, { useState } from 'react';
import styles from './SidebarMenu.module.css';

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  children?: MenuItem[];
}

export interface SidebarMenuProps {
  /** Menu items */
  items: MenuItem[];
  /** Is menu open */
  isOpen: boolean;
  /** Callback when menu should close */
  onClose: () => void;
  /** Menu title */
  title?: string;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isOpen,
  onClose,
  title = 'Menu',
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.children && item.children.length > 0) {
      toggleItem(item.id);
    } else {
      item.onClick?.();
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Menu Items */}
        <nav className={styles.nav}>
          <MenuItemsList
            items={items}
            expandedItems={expandedItems}
            onItemClick={handleItemClick}
            level={0}
          />
        </nav>
      </div>
    </>
  );
};

interface MenuItemsListProps {
  items: MenuItem[];
  expandedItems: Set<string>;
  onItemClick: (item: MenuItem) => void;
  level: number;
}

const MenuItemsList: React.FC<MenuItemsListProps> = ({
  items,
  expandedItems,
  onItemClick,
  level,
}) => {
  return (
    <ul
      className={styles.menuList}
      style={{ paddingLeft: level > 0 ? '20px' : '0' }}
    >
      {items.map(item => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItems.has(item.id);

        return (
          <li key={item.id} className={styles.menuItem}>
            <button
              onClick={() => onItemClick(item)}
              className={`${styles.menuButton} ${
                level > 0 ? styles.submenuButton : ''
              }`}
              aria-expanded={hasChildren ? isExpanded : undefined}
            >
              {item.icon && (
                <span className={styles.menuIcon}>{item.icon}</span>
              )}
              <span className={styles.menuLabel}>{item.label}</span>
              {hasChildren && (
                <span
                  className={`${styles.chevron} ${
                    isExpanded ? styles.chevronExpanded : ''
                  }`}
                >
                  <ChevronIcon />
                </span>
              )}
            </button>

            {hasChildren && isExpanded && (
              <div
                className={`${styles.submenu} ${
                  isExpanded ? styles.submenuExpanded : ''
                }`}
              >
                <MenuItemsList
                  items={item.children!}
                  expandedItems={expandedItems}
                  onItemClick={onItemClick}
                  level={level + 1}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
