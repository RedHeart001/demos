import React from 'react';
import { ThemeContext } from './theme-context';

function ThemedButton() {
    return (
        <ThemeContext.Consumer>
            {
                ({ theme, toggleTheme }) => {
                    console.log(theme);
                    return (
                        <button
                            onClick={toggleTheme}
                            style={{ 'backgroundColor': theme.background }}
                        >
                            changeTheme
                        </button>
                    )
                }
            }
        </ThemeContext.Consumer>
    );
}

export default ThemedButton;