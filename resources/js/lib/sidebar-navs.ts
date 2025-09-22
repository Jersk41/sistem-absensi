import { dashboard } from '@/routes';
import users from '@/routes/users';
import { NavItem } from '@/types';
import { BookOpen, Folder, LayoutGrid, Users } from 'lucide-react';

export const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Users',
        href: users.index(),
        icon: Users,
    },
];

export const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];
