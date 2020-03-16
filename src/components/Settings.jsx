import React, { useReducer, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GlobalStateContext } from '../hook/Context';
import { ACTION_TYPES } from '../hook/Reducer';

const SettingsContainer = styled.div`
    display: inline-flex;
    flex-direction: column;

    .settings__item {
        display: flex;

        &__label {

        }

        &__value {
            display: 
        }
    }
`

const Settings = () => {
    const { dispact, settings } = useContext(GlobalStateContext);
    const [localSettings, setLocalSettings] = useState(null);

    useEffect(() => {
        setLocalSettings(settings);
    }, [settings]); 

    const updateSettings = React.useCallback((e) => {
        e.preventDefault();
        dispact({type: ACTION_TYPES.UPDATE_SETTINGS, value: localSettings});
    })

    return (
        <SettingsContainer>
            <div className="settings__item">
                <div className="settings__item__label">Row</div>
                <input className="settings__item__value">{localSettings && localSettings.row}</input>
            </div>
            <div className="settings__item">
                <div className="settings__item__label">Col</div>
                <input className="settings__item__value">{localSettings && localSettings.col}</input>
            </div>
            <div className="settings__item">
                <div className="settings__item__label">Mine numbers</div>
                <input className="settings__item__value">{localSettings && localSettings.mineCount}</input>
            </div>
            <button onClick={updateSettings}>Confirm</button>
        </SettingsContainer>
    )
};

export default Settings;