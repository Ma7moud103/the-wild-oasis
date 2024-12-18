import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useContext } from "react";
import { useEffect } from "react";


const DarkModeContext = createContext()
function DarkModeProvider({ children }) {

    const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode')

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode")
            document.documentElement.classList.remove("light-mode")
        } else {
            document.documentElement.classList.remove("dark-mode")
            document.documentElement.classList.add("light-mode")
        }
    }, [isDarkMode])

    function toggleDarkMode() {
        setIsDarkMode(prev => !prev)
    }

    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
    </DarkModeContext.Provider>
}

function UseDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) throw new Error('Dark mode context is out side of provider')
    return context
}


export { DarkModeProvider, UseDarkMode }