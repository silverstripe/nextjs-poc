import React from 'react';
import Link from 'next/link';

interface Props {
    ariaLabel: string,
    items?: Array<NavigationItem>
}

const Navigation: React.FC<Props> = ({ ariaLabel, items }) => {
    if (!items || items.length < 1) {
        return null;
    }

    const navigationItems = items.map(({ link, title }) => (
        <li key={link} className="inline-block hover:bg-gray-700 hover:text-white">
            <Link href={link}>
                <a className="block p-4">{title}</a>
            </Link>
        </li>
    ));

    return <nav aria-label={ariaLabel}>
        <ul>
            {navigationItems}
        </ul>
    </nav >
}

export default Navigation;
