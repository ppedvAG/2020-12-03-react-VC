import React from 'react';

// Gebe das heutige Datum aus
function Tsx() {
    let datum = new Date();
    const istKalt: boolean = true;
    // optional - let datum: Date = new Date(); // aber Datentyp wird implizit übernommen
    console.log('datum :>> ', datum);
    return (
        <>
            <p>{datum.toDateString()}</p>
            <p>Ist heute kalt?- {istKalt ? 'true' : 'false'}</p>
            <div style={{
                color: '#000',
                fontSize: getFontSize()
            }}>Inhalt von div
            </div>
            <div className="divClass"></div>
            {/* <div class="divClass"></div> */}
            {/* Type '{ class: string; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'class' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'. Did you mean 'className'?ts(2322) */}

        </>
    )
    /* funktion in funktion funktioniert */
    function getFontSize(): string {
        return '4em';
    }
}

// Cannot find name 'getFontSize'
// console.log('getFontSize() :>> ', getFontSize());


export default Tsx;
