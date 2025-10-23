import type { Meta, StoryObj } from '@storybook/react';
import { SidebarMenu } from './SidebarMenu';
import type { MenuItem } from './SidebarMenu';
import { useState } from 'react';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

// Sample icons
const HomeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m-2.8 2.8l-4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m-2.8-2.8l-4.2-4.2" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const FolderIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const FileIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
    <polyline points="13 2 13 9 20 9" />
  </svg>
);

// Simple menu items (1 level)
const simpleMenuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Home',
    icon: <HomeIcon />,
    onClick: () => alert('Home clicked'),
  },
  {
    id: '2',
    label: 'Profile',
    icon: <UserIcon />,
    onClick: () => alert('Profile clicked'),
  },
  {
    id: '3',
    label: 'Settings',
    icon: <SettingsIcon />,
    onClick: () => alert('Settings clicked'),
  },
];

// Two-level menu
const twoLevelMenuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: <HomeIcon />,
    onClick: () => alert('Dashboard clicked'),
  },
  {
    id: '2',
    label: 'Products',
    icon: <FolderIcon />,
    children: [
      {
        id: '2-1',
        label: 'All Products',
        onClick: () => alert('All Products clicked'),
      },
      {
        id: '2-2',
        label: 'Categories',
        onClick: () => alert('Categories clicked'),
      },
      {
        id: '2-3',
        label: 'Inventory',
        onClick: () => alert('Inventory clicked'),
      },
    ],
  },
  {
    id: '3',
    label: 'Users',
    icon: <UserIcon />,
    children: [
      {
        id: '3-1',
        label: 'All Users',
        onClick: () => alert('All Users clicked'),
      },
      {
        id: '3-2',
        label: 'Add New',
        onClick: () => alert('Add New User clicked'),
      },
    ],
  },
  {
    id: '4',
    label: 'Settings',
    icon: <SettingsIcon />,
    onClick: () => alert('Settings clicked'),
  },
];

// Multi-level menu (3 levels)
const multiLevelMenuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Home',
    icon: <HomeIcon />,
    onClick: () => alert('Home clicked'),
  },
  {
    id: '2',
    label: 'Documents',
    icon: <FolderIcon />,
    children: [
      {
        id: '2-1',
        label: 'Work',
        icon: <FolderIcon />,
        children: [
          {
            id: '2-1-1',
            label: 'Project A',
            icon: <FileIcon />,
            onClick: () => alert('Project A clicked'),
          },
          {
            id: '2-1-2',
            label: 'Project B',
            icon: <FileIcon />,
            onClick: () => alert('Project B clicked'),
          },
        ],
      },
      {
        id: '2-2',
        label: 'Personal',
        icon: <FolderIcon />,
        children: [
          {
            id: '2-2-1',
            label: 'Photos',
            icon: <FileIcon />,
            onClick: () => alert('Photos clicked'),
          },
          {
            id: '2-2-2',
            label: 'Videos',
            icon: <FileIcon />,
            onClick: () => alert('Videos clicked'),
          },
        ],
      },
    ],
  },
  {
    id: '3',
    label: 'Settings',
    icon: <SettingsIcon />,
    children: [
      {
        id: '3-1',
        label: 'Account',
        onClick: () => alert('Account clicked'),
      },
      {
        id: '3-2',
        label: 'Privacy',
        onClick: () => alert('Privacy clicked'),
      },
      {
        id: '3-3',
        label: 'Notifications',
        onClick: () => alert('Notifications clicked'),
      },
    ],
  },
];

// Interactive wrapper component
const SidebarMenuWrapper = ({
  items,
  title,
}: {
  items: MenuItem[];
  title?: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '12px 24px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
          zIndex: 1,
        }}
      >
        Open Menu
      </button>
      <SidebarMenu
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
      />
    </div>
  );
};

export const SimpleSingleLevel: Story = {
  render: () => (
    <SidebarMenuWrapper items={simpleMenuItems} title="Simple Menu" />
  ),
};

export const TwoLevelMenu: Story = {
  render: () => (
    <SidebarMenuWrapper items={twoLevelMenuItems} title="Navigation" />
  ),
};

export const MultiLevelMenu: Story = {
  render: () => (
    <SidebarMenuWrapper items={multiLevelMenuItems} title="File Explorer" />
  ),
};

export const OpenByDefault: Story = {
  args: {
    items: twoLevelMenuItems,
    isOpen: true,
    onClose: () => {},
    title: 'Menu',
  },
};

export const ClosedByDefault: Story = {
  args: {
    items: twoLevelMenuItems,
    isOpen: false,
    onClose: () => {},
    title: 'Menu',
  },
};

export const WithManyItems: Story = {
  render: () => {
    const manyItems: MenuItem[] = Array.from({ length: 20 }, (_, i) => ({
      id: `item-${i}`,
      label: `Menu Item ${i + 1}`,
      icon: i % 2 === 0 ? <FolderIcon /> : <FileIcon />,
      onClick: () => alert(`Item ${i + 1} clicked`),
    }));

    return <SidebarMenuWrapper items={manyItems} title="Long Menu" />;
  },
};

