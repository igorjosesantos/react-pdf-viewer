/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';
import { Popover, Position, Store, Toggle } from '@react-pdf-viewer/core';

import SearchPopover from './SearchPopover';
import ShowSearchPopoverButton from './ShowSearchPopoverButton';
import StoreProps from './StoreProps';
import useDocument from './useDocument';

export interface RenderShowSearchPopoverProps {
    onClick(): void;
}

type RenderShowSearchPopover = (props: RenderShowSearchPopoverProps) => React.ReactElement;

export interface ShowSearchPopoverProps {
    children?: RenderShowSearchPopover;
}

const PORTAL_OFFSET = { left: 0, top: 8 };

const ShowSearchPopover: React.FC<{
    children?: RenderShowSearchPopover,
    store: Store<StoreProps>,
}> = ({ children, store }) => {
    const { currentDoc } = useDocument(store);
    const defaultChildren = (props: RenderShowSearchPopoverProps) => (
        <ShowSearchPopoverButton {...props} />
    );
    const render = children || defaultChildren;

    return (
        currentDoc
            ? (
                <Popover
                    position={Position.BottomLeft}
                    target={
                        (toggle: Toggle) => render({
                            onClick: toggle,
                        })
                    }
                    content={
                        (toggle: Toggle) => <SearchPopover doc={currentDoc} store={store} onToggle={toggle} />
                    }
                    offset={PORTAL_OFFSET}
                    closeOnClickOutside={false}
                    closeOnEscape={true}
                />
            )
            : <></>
    );
};

export default ShowSearchPopover;
