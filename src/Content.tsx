import WebDev from './pages/WebDev';
import GameDev from './pages/GameDev';
import { ReactNode } from 'react';
import React from 'react';

const pages = [<WebDev />, <GameDev />];

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
    }
    render() {
        return (pages[this.state.page]);
    }
}

export default Content;