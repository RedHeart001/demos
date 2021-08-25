import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext, themes } from './theme-context';
// import ThemedButton from './themed-button';
import ThemeTogglerButton from './ThemeTogglerButton'

// 一个使用 ThemedButton 的中间组件
// function Toolbar(props) {
//     return (
//         <ThemedButton onClick={props.changeTheme}>
//             Change Theme
//         </ThemedButton>
//     );
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
            toggleTheme: () => {
                this.setState(state => ({
                    theme:
                        state.theme === themes.dark
                            ? themes.light
                            : themes.dark,
                }))

            }
        }


    }
    render() {
        // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
        // 而外部的组件使用默认的 theme 值
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    {/* <Toolbar changeTheme={this.toggleTheme} /> */}
                    <ThemeTogglerButton />
                </ThemeContext.Provider>
            </div>
        );
    }
}

App.contextType = ThemeContext;




ReactDOM.render(<App />, document.getElementById('root'));