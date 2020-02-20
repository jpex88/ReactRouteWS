import React, { Component } from 'react';

import './StartPage.css';

export default class StartPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: 'Trainisar',
            clicked: false
        }

        this.toggleText = this.toggleText.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);

    }

    onButtonClick() {
        this.setState({ user: 'Ellinor', clicked: !this.state.clicked })
    }

    toggleText() {
        if(this.state.clicked) {
            return <div>Knappen är klickad!</div>
        } else {
            return null
        }
    }

    render() {
        return(
            <span>
                <Welcome name={this.state.user} list={['bla', 'blaa']}/>
                <Welcome name='Ellinor' list={[]}/>
                <button className={this.state.clicked && 'btn-red'} onClick={this.onButtonClick}>Klicka på mig!</button>
                {this.state.clicked ? <div>Knappen är klickad!</div> : null}
                {this.toggleText()}
                {this.state.clicked && <div>Hello World</div>}
            </span>
        )
    }
}

function Welcome(props) {
    return (
        <h1>Hej {props.name}! {props.list[0]}</h1>
    )
}