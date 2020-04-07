import React, { createContext, Component } from 'react';

export const LevelContext = createContext();

class LevelContextProvider extends Component {
    state = {
        level: 1
    }
    render () {
        return (
            <LevelContext.Provider value={{...this.state}}>
                {this.props.children}
            </LevelContext.Provider>
        )
    }
}

export default LevelContextProvider;
