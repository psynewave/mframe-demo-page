import React from 'react';
import { MFrameCustomHead } from "react-mframe";

export const triggeredEvent = (event, message) => {
    console.log(`${event} ${message}`);
}

export const customHead = (title, styles, links) => (
    <MFrameCustomHead title={title} styles={styles} links={links} />
);