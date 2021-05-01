import React, { FC, useState } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { media } from '../styles'
import '../styles/reset.scss'
import '../styles/utils.scss'

import { Themes } from '../shared/enums'
import Header from './Header'
import Home from '../pages/Home/Home'
import styles from './Application.module.scss';

const GlobalStyle = createGlobalStyle<{ activeTheme: string }>`
  html {
    font-size: ${({ activeTheme }) => activeTheme === Themes.normal
    ? '62.5%' : activeTheme === Themes.compact ? '50%' : '70%'};
  };
`

const Application: FC = () => {
  const [activeTheme, setActiveTheme] = useState(Themes.normal as string)

  return (
    <Router>
      <GlobalStyle activeTheme={activeTheme} />
      <div className={styles.outerWrap}>
        <Header activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
        <div className={styles.spacer}>
          <div className={styles.contentWrap}>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Application
