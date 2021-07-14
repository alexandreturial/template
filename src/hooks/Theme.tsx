import React, {createContext, useState, useContext} from 'react';

import light from '../Styles/themes/light';

interface IThemeContext{
    toggleTheme(): void;
    theme: ITheme;
}

interface ITheme{
    title: string;

    colors:{
        primary: string;
        secundary: string;
        tertiary: string;
        
        white: string;
        black:string;
        gray:string;

        success:string;
        info:string;
        warning:string;    
    }
}
 
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) =>{
    const [theme, setTheme] = useState<ITheme>(() =>{
        const themeSaved = localStorage.getItem('@project-theme:theme');
        if(themeSaved){
            return JSON.parse(themeSaved)
        }else{
            return light;
        }
    
    });

    const toggleTheme = () =>{
        if(theme.title === 'dark'){
            setTheme(light);
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(light));
        }
    };
    return(
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}


function useTheme(): IThemeContext{
    const context = useContext(ThemeContext);

    return context;
}

export {ThemeProvider, useTheme};


