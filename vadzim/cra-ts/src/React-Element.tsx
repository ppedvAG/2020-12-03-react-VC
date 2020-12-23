import { createSocket } from 'dgram';
import React from 'react';

/* todo #2 */
function ReactElement() {
    const el = React.createElement('div', { id: 'divId' }, 'text in div');
    let reactElProps = Object.entries(el);
    console.log('reactElProps :>> ', reactElProps);
    console.log('el :>> ', el);

    const jsxEl = <p></p>;
    let jsxElProps = Object.entries(jsxEl);
    console.log('jsxElProps :>> ', jsxElProps);
    console.log('jsxEl :>> ', jsxEl);

    // const divMitP = React.createElement(el, {class: 'divClass'}, jsxEl);
    // const divMitP = React.createElement(jsxEl, {class: 'divClass'}, 'jsxEl');


    const el2 = React.cloneElement(el, { id: 'elId' });
    console.log('el2 :>> ', el2);


    /* todo #4 */

    /* todo #3 */
    return (
        <div>
            <div>React Element: {el} </div>
            <div>cloned React Element: {el2} </div>
            <div>React.isValidElement(el2): {React.isValidElement(el2) ? 'true' : 'false'}</div>
        </div>
    )
}

export default ReactElement;
