import React, { ChangeEvent } from 'react';

/**
 * LEBENSZYKLUS DER KOMPONENTE:
 * 
 * MOUNTING
 * 
 * ctor
 * render
 * 
 * put letter in input
 * 
 * input event ocures
 * handleInput called
 * before setState in handleInput
 * after -//-
 * 
 * change event ocures
 * handleChange called
 * before setState in handleChange
 * after -//-
 * 
 * render (nur einmal!)
 */
export default class PWConfirm extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            inp1Val: '',
            inp2Val: '',
            confirmMssg: ''
        }
        console.log('ctor PWConfirm');
    }

    handleChange(ev: ChangeEvent) {
        console.log('handleChange called');
        let event = ev!;
        if (event.target.id === 'inp1'){
            console.log('before setState inp1 in handleChange');
            this.setState({
                inp1Val: (event.target as HTMLInputElement).value
            })
            console.log('this.state :>> ', this.state);
            console.log('after setState inp1 in handleChange');
        }


        else {
            this.setState({
                inp2Val: (event.target as HTMLInputElement).value
            })
        }
        // console.log('(event.target as HTMLInputElement).value :>> ', (event.target as HTMLInputElement).value);
    }

    handleClick() {
        console.log('handleClick called');
        console.log('before setState in handleClick');
        this.setState({
            inp1Val: '',
            inp2Val: '',
            confirmMssg: 'Passwort bestätigt'
        })
        console.log('this.state :>> ', this.state);
        console.log('after setState in handleClick');
    }

    handleInput() {
        console.log('handleInput called');
        console.log('before setState in handleInput');
        this.setState({
            confirmMssg: ''
        })
        console.log('this.state :>> ', this.state);
        console.log('after setState in handleInput');
    }

    render() {
        console.log('render called');
        return (
            <div>
                <p>
                    PWConfirm works
                </p>
                <input
                    id="inp1"
                    type="text"
                    onChange={event => this.handleChange(event)}
                    onInput={() => this.handleInput()}
                    value={this.state.inp1Val}
                    placeholder="pw" />

                <input
                    id="inp2"
                    type="text"
                    onChange={event => this.handleChange(event)}
                    onInput={() => this.handleInput()}
                    value={this.state.inp2Val}
                    placeholder="repeat pw" />

                <button
                    disabled={this.state.inp1Val !== this.state.inp2Val || this.state.inp1Val === '' || this.state.inp2Val === ''}
                    onClick={() => this.handleClick()}
                >Confirm</button>
                <p>{this.state.confirmMssg}</p>
            </div>
        )
    }
}