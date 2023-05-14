import React, { createContext, useState } from 'react'
import { GlobalStyle } from '../../styles/globals'
import { Themes } from '../../styles/themes'

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Themes.dark)

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
