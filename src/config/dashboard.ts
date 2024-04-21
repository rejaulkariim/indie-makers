// import { DashboardConfig } from '@/types';

export const dashboardConfig = {
  mainNav: [
    {
      title: 'Catalog',
      href: '/docs',
    },
    {
      title: 'Support',
      href: '/support',
      disabled: true,
    },
  ],

  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/user/dashboard',
      icon: 'layoutDashboard',
    },
    {
      title: 'Submit Tool',
      href: '/user/dashboard/submit',
      icon: 'shoppingCartIcon',
    },
    {
      title: 'Feature a Tool',
      href: '/user/dashboard/',
      icon: 'shoppingCartIcon',
    },
    {
      title: 'Settings',
      href: '/user/dashboard/settings',
      icon: 'settings',
    },
    {
      title: 'Credits',
      href: '/user/dashboard/credits',
      icon: 'settings',
    },
  ],
};
