import React, { PureComponent } from 'react'

interface IUser {
    id: number,
    name: string,
    username: string,
    email: string
}

export default class MyPureComponent extends React.PureComponent<{}, {user: IUser, loggedIn: boolean}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            user: {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz"
            },
            loggedIn: true
        }
    }

    componentDidMount() {
        this.setState({
            user: {
                id: 1,
                name: "Leanne Graham",
                username: "Pit",
                email: "Sincere@april.biz"
            }
        })
    }
/* todo #13 */
    render() {
        return (
            <>
                <p>MyPureComponent works</p>
                <p>state: {this.state.toString()}</p>
                <p>loggedIn: {this.state.loggedIn}</p>
                <p>Username: {this.state.user.username}</p>
            </>
        )
    }
}