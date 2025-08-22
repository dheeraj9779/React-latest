import { useMemo, useState } from "react"
import ThemeContext from "./themeContext"

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState<'light' | 'dark'>('light')
    const contextValue = useMemo(() => ({
        theme,
        toggleTheme:() => {
             setTheme(prev => prev === 'light' ? 'dark' : 'light')
        }
    }),[theme]) 

    return(
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider