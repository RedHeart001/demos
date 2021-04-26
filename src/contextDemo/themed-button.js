import React from 'react';
import { ThemeContext } from './theme-context';

function ThemedButton(props) {
    // let theme = this.context;
    return (
        <ThemeContext.Consumer>
            {
                value => {
                    console.log(value)
                    return (
                        <button
                            {...props}
                            style={{ 'backgroundColor': value.background }}
                        />
                    )
                }
            }
        </ThemeContext.Consumer>
    );
}

export default ThemedButton;