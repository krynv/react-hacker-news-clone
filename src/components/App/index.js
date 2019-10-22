import React from 'react';
import './App.css';

import Stories from '../Stories';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Stories stories={this.props.stories} onDismiss={() => { }} />
            </div>
        );
    }
}

export default App;