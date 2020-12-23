import { stat } from 'fs';
import React from 'react';
import { createStore } from 'redux';



export default function Redux() {
    const myReducer = (state = 0, action: { type: string }) => {
        switch (action.type) {
            case 'add2':
                return state + 2;
            case 'minus3':
                return state - 3;
            case 'mal2':
                return state * 2;
            default:
                return state;
        }
    }

    /**
     * wir hatten im Kurs kein default bei switch angewendet.
     * 
     * mit default ist Shape der Funktion wie folgt:
     * const myReducer: (state: number | undefined, action: { type: string; }) => number
     * 
     * ohne default:
     * const myReducer: (state: number | undefined, action: { type: string; }) => number | undefined
     * 
     * Mit default wird 'undefined' als Rückgabe ausgeschlossen. Mindestens die 0 wird zurückgegeben. 
     * number | undefined konnte keinem Overload-Shape von dem Reducer-Objekt zugeordnet werden. 
     * (Um nachzuschauen, wie diese Objekte aussehen, entferne default bei switch und lese die Hinweise in der Fehlermeldung.)
     * */

    /* todo #17 */
    const myStore = createStore(myReducer);

    myStore.dispatch({ type: 'add2' });
    console.log('myStore.getState() :>> ', myStore.getState());
    myStore.dispatch({ type: 'minus3' });
    console.log('myStore.getState() :>> ', myStore.getState());

    return (
        <div>State: {myStore.getState()}</div>
    )
}
