import React, { memo, FC } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Themes } from '../shared/enums'
import { Dropdown, CN_DROPDOWN_CHEVRON } from '../components/form'
import styles from './Header.module.scss'

interface Props {
  activeTheme: string;
  setActiveTheme(selectedTheme: string): void;
}
const Header: FC<Props> = ({ activeTheme, setActiveTheme }) => (
  <div className={styles.wrap}>
    <a className={styles.logoLink} href="" target="_blank" rel="noopener noreferrer">
      <img className={styles.logo} src={logo} />
    </a>
    <Dropdown
      className={styles.dropdownStyled}
      list={Object.values(Themes)}
      activeItem={activeTheme}
      placeholder="Theme"
      onItemSelect={selectedTheme => setActiveTheme(selectedTheme)}
    />
    <a className={styles.github} href="https://github.com/vincentbollaert/react-boilerplate-simple" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  </div>
)

export default memo(Header)
