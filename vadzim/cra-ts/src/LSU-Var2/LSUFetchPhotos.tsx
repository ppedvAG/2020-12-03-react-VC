import React from 'react';
import LSUPhoto from './LSUPhoto';
import LSUPhotos from './LSUPhotos';
import IPhoto from '../IPhoto';

export default class LSUFetchPhotos extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            neunPhotos: new Array<IPhoto>()
        }
        console.log('this.state.neunPhotos in ctor:>> ', this.state.neunPhotos);
    }
    
    fetchPhotosAPI = () => {
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

    fetchPhotos = this.fetchPhotosAPI;

    componentDidMount() {
        this.fetchPhotos();
    }

    render () {

        return (
            <div>
                <h2>LSU Fetch Photos</h2>
<LSUPhotos photos={this.state.neunPhotos} />
            </div>

            )
    }

}