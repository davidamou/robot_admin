import React, { createContext, useEffect, useState } from 'react'
import { GlobalStyle } from '../../styles/globals'
import { Themes } from '../../styles/themes'

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Themes.light)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(darkModeQuery.matches)
    const handler = (e) => setIsDarkMode(e.matches)
    darkModeQuery.addEventListener('change', handler)
    return () => darkModeQuery.removeEventListener('change', handler)
  }, [isDarkMode])

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
