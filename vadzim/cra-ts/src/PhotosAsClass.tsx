// import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import Photo from './Photo';
import IPhoto from './IPhoto';

class PhotosAsClass extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            neunPhotos: new Array<IPhoto>()
        }
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
                this.setState({ neunPhotos: arrFromJson.slice(0, 9) });
                // springt rüber zu DidUpdate und dann zurück hierher, 
                // deswegen die verkehrte Ausgabe in der Konsole
                console.log('neunPhotos :>> ', this.state.neunPhotos);
            })
    }

    // private _photos!: [];
    // public get Photos(): [] {
    //     return this._photos;
    // }
    // public set Photos(v: []) {
    //     this._photos = v;
    // }

    // private _photos!: any;
    // public get Photos(): any {
    //     return this._photos;
    // }
    // public set Photos(v: any) {
    //     this._photos = v;
    // }

    // (
    //     <ul>
    //       {this.state.todos.map(todo => (
    //        <li>{todo}</li>
    //       ))}
    //      </ul>
    //     );
    componentDidUpdate() {
        // this.Photos = (
        //     <div>
        //         {this.state.neunPhotos.map((item: IPhoto) => (
        //             <Photo key={item.id} photo={item} />
        //         ))}
        //     </div>
        // )

        // console.log('this.Photos :>> ', this.Photos);
    }


    render() {
        return (
            <div id="container">
                <p>photos as class</p>
                {/* {this.Photos} todo #11 */}
                {this.state.neunPhotos.map((item: IPhoto) => (
                    // <Photo photo={item} /> // Warning: Each child in a list should have a unique "key" prop.
                    <Photo key={item.id} photo={item} />
                ))}        
            </div>
        )
    }
}
export default PhotosAsClass;