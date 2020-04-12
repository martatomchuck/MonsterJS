import React, { createContext, Component } from 'react';

export const LevelContext = createContext();

class LevelContextProvider extends Component {
    state = {
        level: 1
    }
    handlePrevBtn = () => {
        this.setState({ level: this.state.level-1});
        console.log(this.state.level - 1);
    }
    handleNextBtn = () => {
        this.setState({ level: this.state.level+1});
    }
    render () {
        return (
            <LevelContext.Provider value={{...this.state, handlePrevBtn: this.handlePrevBtn, handleNextBtn: this.handleNextBtn}}>
                {this.props.children}
            </LevelContext.Provider>
        )
    }
}

export default LevelContextProvider;
