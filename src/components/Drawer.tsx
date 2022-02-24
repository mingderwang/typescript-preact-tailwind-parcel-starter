import * as React from 'react'
import { Drawer, Button } from '@tail-kit/tail-kit'

function BasicDrawer() {
  const [visible, setVisible] = React.useState(false)
  function showDrawer() {
    setVisible(true)
  }
  function hideDrawer() {
    setVisible(false)
  }
  return <h1>hello</h1>
}

export default BasicDrawer
