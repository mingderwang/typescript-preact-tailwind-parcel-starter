import * as React from 'react'
import { Drawer, Button } from '@tail-kit/tail-kit'
import '@tail-kit/tail-kit/dist/tail-kit.css'

export function BasicDrawer() {
  const [visible, setVisible] = React.useState(false)
  function showDrawer() {
    setVisible(true)
  }
  function hideDrawer() {
    setVisible(false)
  }
  return (
    <>
      <Button buttonType="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        visible={visible}
        title="Basic Drawer"
        onRequestClose={hideDrawer}
        placement="left"
      >
        <p>Some Contents...</p>
        <p>Some Contents...</p>
        <p>Some Contents...</p>
      </Drawer>
    </>
  )
}
