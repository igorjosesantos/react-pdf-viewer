/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';

import ThemeContext from '../theme/ThemeContext';

interface IconProps {
    children?: React.ReactNode;
    size?: number;
}

const Icon: React.FC<IconProps> = ({ children, size = 24 }) => {
    const theme = React.useContext(ThemeContext);
    const width = `${size || 24}px`;

    return (
        <svg
            className={`${theme.prefixClass}-icon`}
            height={width}
            viewBox="0 0 24 24"
            width={width}
        >
            {children}
        </svg>
    );
};

export default Icon;
