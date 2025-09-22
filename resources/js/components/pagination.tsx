import React, { ComponentProps } from 'react'
import TextLink from './text-link'
import { Link } from '@inertiajs/react';

export interface LinksPropsType {
    url: string | null,
    page: number | null,
    label: string,
    active: boolean,
}

type PaginationProps = {
    links: LinksPropsType[];
} & ComponentProps<typeof Link>

function Pagination({ links, ...props }: PaginationProps) {
    if (links.length <= 3) return null;
    return (
        links.map((link, index) => {
            const parsedLabel = link.label.replace(/&laquo;/g, '«').replace(/&raquo;/g, '»').trim();
            return (
                <TextLink
                    {...props}
                    key={link.label}
                    className={link.active
                        ? `text-white bg-foreground dark:bg-accent no-underline px-4 py-2 border rounded-md hover:bg-accent-foreground ${!link.page ? 'text-muted-foreground bg-muted' : ''}`
                        : `no-underline px-4 py-2 border rounded-md hover:bg-accent ${!link.page ? 'text-muted-foreground bg-muted' : ''}`
                    }
                    href={link.url ?? "#"}
                    method='get'
                    only={props.only}
                    disabled={link.url === null}
                    as='button'
                >
                    {parsedLabel}
                </TextLink>
            )
        })
    )
}

export default Pagination
