import AppLayout from '@/layouts/app-layout';
import { users } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: users().url,
    },
];

export default function UsersPage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <h2 className='text-2xl'>Hello</h2>
            </div>
        </AppLayout >
    );
}
