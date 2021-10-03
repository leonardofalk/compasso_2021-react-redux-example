import React from 'react'
import { styles } from './styles'

export const Layout = Object.assign(
  (props) => <div {...props} style={styles.layout} />,
  {
    Body: (props) => <div {...props} style={styles.body} />,
    Navigation: (props) => <div {...props} style={styles.navigation} />,
  }
)
