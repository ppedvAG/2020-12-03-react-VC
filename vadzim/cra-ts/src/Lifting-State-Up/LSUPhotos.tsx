// import { render } from '@testing-library/react';
import React, { ChangeEvent } from 'react';
import LSUPhoto from './LSUPhoto';
import IPhoto from '../IPhoto';

/** 
 * LEBENSZYKLUS DER KOMPONENTE:
 * 
 * MOUNTING
 * 
 * ctor, 9Photos: []
 * render, 9Photos: []
 * componentDidMount
 * for setState in fetch 9Photos: []
 * setState in fetch
 * render, 9Photos: [{}, {}, ...]
 * 9Photos.map()
 * Photo x 9 mal
 * nach setState in fetch 9Photos: [{}, {}, ...]
 * 
 * CHANGEEVENT OCCURES
 * 
 * handleChange call
 * event Objekt ist befüllt
 * geänderte 9Photos werden ausgegeben VOR? setState
 * 9Photos.map() im setState, 9Photos updated
 * setState in handleChange
 * render, 9Photos: [undefined, undefined, ...]???
 * 9Photos.map() im setState UPDATED? WIEDER?
 * (setState wahrscheinlich wurde wieder? aufgerufen)
 * render WIEDER?, 9Photos: [undefined, undefined, ...]
 * 
 * ERROR OCCURES
*/

class LSUPhotos extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            neunPhotos: new Array<IPhoto>()
        }
        console.log('this.state.neunPhotos in ctor:>> ', this.state.neunPhotos);
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                console.log('json:', json)
                return json
            }
            )
            .then(arrFromJson => {
                console.log('neunPhotos vor setState in fetch :>> ', this.state.neunPhotos);
                this.setState({ neunPhotos: arrFromJson.slice(0, 9) });
                console.log('neunPhotos nach setState in fetch :>> ', this.state.neunPhotos);
            })
    }

    // Warum der Event Handler nicht als normale Klassenmethode?
    // Punkt 1: in der klassische Methode bezieht sich das Wort this nicht auf die Klasse
    // Punkt 2: wenn man diese klassische Methode über Props-Objekt nach unten schickt, führt es zum Re-Rendering der unteren Komponente
    // handleChange(ev: ChangeEvent) {
    handleChange = (ev: ChangeEvent) => {
        console.log('changeHandler');
        console.log('ev.target :>> ', ev.target);
        console.log('ev.target.id :>> ', ev.target.id);

        /*         this.setState((oldState: { neunPhotos: IPhoto[]; }) => { 
                    let neueNeunPhotos: any = oldState.neunPhotos.map((item: IPhoto) => {
                        if (item.id === 1) {
                            item.title = 'test'
                        }
                        console.log('item :>> ', item);
                    });
                    return {neunPhotos: neueNeunPhotos! };
                }, ); */



        // BESCHR: Versuch mit auslagern von mapping - hat das Problem nicht beseitigt
        // BESCHR: in dieser Variante aber wird das Mapping nur einmal ausgeführt im Unterschied zu der oberen Variante        
        // BESCHR: Variante 1
        /*         const nullSetState = (eventObject: any) => {
                    let neueNeunPhotos: { neunPhotos: IPhoto[]; } = this.state.neunPhotos.map((item: IPhoto) => {
                                if (item.id === 1) {
                                    item.title = 'test'
                                }
                                console.log('item :>> ', item);
                            });
                            return {neunPhotos: neueNeunPhotos! };
                        };        
                this.setState(nullSetState(ev)) */
        // BESCHR: Variante 2
        let neueNeunPhotos = (this.state.neunPhotos as Array<IPhoto>).map((item: IPhoto) => {
            if (item.id === 1) {
                item.title = 'test'
            }
            console.log('item :>> ', item);
        });
        this.setState({ neunPhotos: neueNeunPhotos! });
        // let neueNeunPhotos = this.state.neunPhotos;



        // dieses verändertes state-Setzen hat das Problem mit 'id of undefined' nicht gelöst.
        // stattdessen ein unerwünschtes Effekt: map und render werden zweimal ausgeführt

        // Die folgende Zeile beinhaltet schon upgedatetes Array
        // wird aber in der Konsole vor den item-Ausgaben aus map-Funktion anzeigt. 
        console.log('this.state.neunPhotos in handleClick:>> ', this.state.neunPhotos as Array<IPhoto>);
        // Grund dafür, dass setState eine asynchrone Methode ist
        // photos sind im state, mit aktualisiertem title beim bild 1
        // Fehler kommt beim wiederholten Rendern
        // Das array hat nur undefined drin, wie es im Konstruktor definiert ist
        // Aber warum wird mindestens nicht der alte State nach dem Fetchen ausgegeben?
    }
    render() {
        console.log('this.state.neunPhotos in render :>> ', this.state.neunPhotos);
        if (this.state.neunPhotos[1] === undefined) {
            return <div>
                muss gewartet werden
            </div>
        }
        else {
            return (
                <div id="container">
                    <p>photos as class</p>
                    {(this.state.neunPhotos as Array<IPhoto>).map((photo =>
                        <LSUPhoto photo={photo} key={photo.id} onChange={this.handleChange} />
                        // <LSUPhoto photo={photo} onChange={this.handleChange} />
                    ))}
                    {/* {this.state.neunPhotos.map((photo: { id: any; }) => 
                   <LSUPhoto key={photo.id} photo={photo} onChange={this.handleChange}/>
                )}         */}
                </div>
            )
        }
    }
}
export default LSUPhotos;