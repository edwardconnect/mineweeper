import React, {useReducer} from 'react';
import { reducer } from './Reducer';

export const GlobalStateContext = React.createContext({
    settings: {
        rowCount: 20,
        colCount: 20,
        mineCount: 5
    },
    flagUsed: {

    },
    hasStarted: false,
    boardData: []
});

const initValues = {
    settings: {
        rowCount: 20,
        colCount: 20,
        mineCount: 5
    },
    flagUsed: {

    },
    hasStarted: false,
    boardData: []
}

export const GlobalStateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initValues)

    return (
        <GlobalStateContext.Provider value={{
            dispatch: dispatch,
            settings: {
                rowCount: state.settings.rowCount,
                colCount: state.settings.colCount,
                mineCount: state.settings.mineCount
            },
            flagUsed: state.flagUsed,
            hasStarted: state.hasStarted
        }}>
            {children}
        </GlobalStateContext.Provider>
    )
}
