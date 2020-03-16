import React from 'react';

export const ACTION_TYPES = {
    GAME_INIT: 'GAME_INIT',
    UPDATE_SETTINGS: 'UPDATE_SETTINGS'
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.GAME_INIT: {
            const { rowCount, colCount, mineCount } = state.settings;
            const mineIdxs = [];

            // Generate mine location index
            for (let mIdx = 0; mIdx < mineCount; mIdx++) {
                let newIdx;
                while (mineIdxs.indexOf(newIdx) < 0) {
                    newIdx = getRandomInt((colCount + 1) * (rowCount + 1));
                }
                mineIdxs.push(mineIdxs);
            }

            for (let rIdx = 0; rIdx < rowCount; ++rIdx) {
                
            }
        }
    }
}