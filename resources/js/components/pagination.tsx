import { Link } from '@inertiajs/react';
import { ComponentProps } from 'react';
import TextLink from './text-link';

export interface LinksPropsType {
    url: string | null;
    page: number | null;
    label: string;
    active: boolean;
}

type PaginationProps = {
    links: LinksPropsType[];
} & ComponentProps<typeof Link>;

function Pagination({ links, ...props }: PaginationProps) {
    if (links.length <= 3) return null;
    return links.map((link, index) => {
        const parsedLabel = link.label
            .replace(/&laquo;/g, '«')
            .replace(/&raquo;/g, '»')
            .trim();
        return (
            <TextLink
                {...props}
                key={link.label}
                className={
                    link.active
                        ? `rounded-md border bg-foreground px-4 py-2 text-white no-underline hover:bg-accent-foreground dark:bg-accent ${!link.page ? 'bg-muted text-muted-foreground' : ''}`
                        : `rounded-md border px-4 py-2 no-underline hover:bg-accent ${!link.page ? 'bg-muted text-muted-foreground' : ''}`
                }
                href={link.url ?? '#'}
                method="get"
                only={props.only}
                disabled={link.url === null}
                as="button"
            >
                {parsedLabel}
            </TextLink>
        );
    });
}

export default Pagination;
