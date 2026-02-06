// menuData.ts
export interface DropdownItem {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export const menuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Who We Are',
    href: '/our-team',
    dropdown: [
      { label: 'Our Team', href: '/our-team' },
      { label: 'Mission & Vision', href: '/mission-and-vision' },
    ],
  },
  {
    label: 'Our Duty',
    href: '/environmental-care',
    dropdown: [
      { label: 'Environmental Care', href: '/environmental-care' },
      { label: 'Safety', href: '/safety' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];
