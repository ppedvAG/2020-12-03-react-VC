import React from 'react'

export default class LifecycleMethods extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            etwas: 'etwas'
        }
        console.log("instanz erstellt");
    }

    componentDidMount() {
        console.log('didMount');
        // this.setState({etwas: 'etwas neues'});
        this.forceUpdate();
    }

    componentDidUpdate() {
        // wird durch setState in forceUpdate aufgerufen
        console.log('didUpdate')
    }

    forceUpdate() {
        console.log('forced update')
        this.setState({ etwas: 'etwas neues' })
    }

    render() {
        return (
            <div>
                LifecycleMethods works
                <p>this.props.forUpdate: {this.props.forUpdate}</p>
            </div>
        )
    }
}