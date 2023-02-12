import React from 'react'

const ConfigurationContext = React.createContext({
  showContent: false,
  showLeftNavbar: true,
  showRightNavbar: false,
  onToggleShowContent: () => {},
  onToggleShowLeftNavbar: () => {},
  onToggleShowRightNavbar: () => {},
})

export default ConfigurationContext
