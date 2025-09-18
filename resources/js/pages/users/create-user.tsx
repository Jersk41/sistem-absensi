import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { index } from '@/routes/users';
import { BreadcrumbItem } from '@/types';
import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import UserController from '@/actions/App/Http/Controllers/UserController';
import { LoaderCircle } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: index().url,
    },
    {
        title: 'Create',
        href: '',
    },
];

export default function CreateUser() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create User" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-hidden rounded-xl p-4">
                <Form
                    {...UserController.store.form()}
                    resetOnSuccess={['name', 'email', 'password', 'password_confirmation']}
                    disableWhileProcessing
                    className='grid gap-6'>
                    {({ processing, errors }) => (
                        <Card>
                            <CardContent className="space-y-4">
                                <div className='grid gap-2'>
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        name="name"
                                        placeholder="Full name"
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className='grid gap-2'>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="email@example.com"
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className='grid gap-2'>
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div className='grid gap-2'>
                                    <Label htmlFor="password_confirmation">Confirm Password</Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Confirm password"
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" className='' tabIndex={5} disabled={processing}>
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    {processing ? 'Creating...' : 'Create User'}
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </Form>
            </div>
        </AppLayout >
    );
}
