import React from 'react';

export default class ClassComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dateTimeString: ''
        }
        this.tick = this.tick.bind(this);
    }
    /*         
        let tick = () => {
        let date = new Date();
        this.setState({dateTimeString: date.toTimeString()}, () => console.log('state Changed'))
    } */
    /*         let tick = () => {
                let date = new Date();
                this.setState({dateTimeString: date.toTimeString()}, () => console.log('state Changed'))
            } */
    
    tick() {
        let date = new Date();
        // this.setState({ dateTimeString: date.toTimeString() }, () => console.log('state Changed'))
        this.setState({ dateTimeString: date.toTimeString()})
    }

    render() {
        setInterval(() => { this.tick() }, 1000);
        // setInterval(this.tick, 1000);
        // setInterval(this.tick.bind(this), 1000);
        return (
            <span>
                {this.state.dateTimeString}
            </span>
        )
    }
}