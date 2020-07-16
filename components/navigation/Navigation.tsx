import React from 'react';

interface Props {
    ariaLabel: string,
    items?: Array<NavigationItem>
}

const Navigation: React.FC<Props> = ({ ariaLabel, items }) => {
    if (!items || items.length < 1) {
        return null;
    }

    const navigationItems = items.map(({ Link, Title }) => (
        <li key={Link} className="inline-block hover:bg-gray-700 hover:text-white">
            <a href={Link} className="block p-4">{Title}</a>
        </li>
    ));

    return <nav aria-label={ariaLabel}>
        <ul>
            {navigationItems}
        </ul>
    </nav >
}

export default Navigation;
