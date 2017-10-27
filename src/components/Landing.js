import React, { Component } from 'react';

export default class Landing extends Component {
    render () {
        console.log(process.env.REACT_APP_LOGIN);
        return (
            <div>
                <div>
                <a href={process.env.REACT_APP_LOGIN}>
                        <button className='login_btn'>Login</button>
                    </a>
                </div>
            </div>
        );
    }
}