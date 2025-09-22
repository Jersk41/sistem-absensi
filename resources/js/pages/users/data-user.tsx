import Pagination, { LinksPropsType } from '@/components/pagination';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { destroy, index } from '@/routes/users';
import { BreadcrumbItem, User } from '@/types';
import type { PageProps } from '@inertiajs/core';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { AlertCircle, Info, LoaderCircle, MoreHorizontal, Pencil, Plus, RefreshCw, Search, Trash } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import FormUser from './form-user';

interface DataUserProps {
    users: {
        data: Array<User>;
        links: Array<LinksPropsType>;
    };
    filters: {
        search: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: index().url,
    },
];

interface FlashProps extends PageProps {
    flash?: {
        status: string;
        message: string;
    };
}

export default function DataUser({ users, filters }: DataUserProps) {
    const { props } = usePage<FlashProps>();
    const flash = props.flash;
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

    const { data, setData, get, processing, reset } = useForm({
        search: filters.search || '',
    });

    const handleCreate = () => {
        setSelectedUser(undefined);
        setIsFormOpen(true);
    };

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setIsFormOpen(true);
    };

    const handleSearch: FormEventHandler = (e) => {
        e.preventDefault();
        get(
            index({
                mergeQuery: {
                    search: data.search,
                    page: 1,
                },
            }).url,
            {
                preserveState: true,
            },
        );
    };

    const handleReset = () => {
        reset();
        router.get(index().url);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Users" />

            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{selectedUser ? 'Edit User' : 'Create New User'}</DialogTitle>
                        <DialogDescription>
                            {selectedUser ? "Update the user's information below." : 'Fill out the form below to create a new user.'}
                        </DialogDescription>
                    </DialogHeader>
                    <FormUser user={selectedUser} onSuccess={() => setIsFormOpen(false)} />
                </DialogContent>
            </Dialog>

            <div className="flex h-full flex-1 flex-col gap-4 overflow-hidden rounded-xl p-4">
                {flash && flash.message && (
                    <Alert variant={flash.status === 'success' ? 'default' : 'destructive'}>
                        {flash.status === 'success' ? <Info /> : <AlertCircle />}
                        <AlertTitle>{flash.status}</AlertTitle>
                        <AlertDescription>{flash.message}</AlertDescription>
                    </Alert>
                )}
                <Card>
                    <CardHeader className="flex flex-row justify-between">
                        <form onSubmit={handleSearch} className="flex w-1/3 items-center space-x-2">
                            <Input type="text" value={data.search} placeholder="Cari user..." onChange={(e) => setData('search', e.target.value)} />
                            <Button variant="secondary" type="submit" disabled={processing}>
                                {!processing ? <Search className="size-4" /> : <LoaderCircle className="size-4 animate-spin" />} Cari
                            </Button>
                            <Button variant="outline" type="button" onClick={handleReset}>
                                <RefreshCw className="size-4" /> Reset
                            </Button>
                        </form>
                        <Button variant="default" onClick={handleCreate}>
                            <Plus className="size-4" /> Add User
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.data.map((user: User, i: number) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem onSelect={() => handleEdit(user)}>
                                                        <Pencil className="size-4" /> Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onSelect={() =>
                                                            router.delete(destroy(user.id), {
                                                                onBefore: () => confirm('Are you sure you want to delete this user?'),
                                                            })
                                                        }
                                                        className="text-red-600 focus:text-red-600"
                                                    >
                                                        <Trash className="size-4" /> Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="mt-8 flex justify-start space-x-2">
                            <Pagination links={users.links} preserveState />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
