import React, { createContext, useEffect, useState } from 'react'
import { GlobalStyle } from '../../styles/globals'
import { Themes } from '../../styles/themes'

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Themes.light)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

    //Verify if user has dark mode enabled by default
    setIsDarkMode(darkModeQuery.matches)

    // add listener for theme change
    const handler = (e) => setIsDarkMode(e.matches)
    darkModeQuery.addEventListener('change', handler)

    // remove listener when component unmounts
    return () => darkModeQuery.removeEventListener('change', handler)
  }, [isDarkMode])

  // set theme based on user preference
  useEffect(() => {
    if (isDarkMode) {
      setTheme(Themes.dark)
    } else {
      setTheme(Themes.light)
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setTheme(theme == Themes.dark ? Themes.light : Themes.dark)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyle theme={theme} />
      {children}
    </ThemeContext.Provider>
  )
}
