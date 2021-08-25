import React from 'react';
const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext({
    theme: themes.dark, // 默认值
    toggleTheme: () => { }    // 一个构造
}
);
ThemeContext.displayName = 'MyContext';
export { ThemeContext, themes };