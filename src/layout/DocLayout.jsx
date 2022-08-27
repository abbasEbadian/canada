import React, { useState } from 'react'
import HeaderDocumentation from '../components/SubDocumentation/HeaderDocumentation'
import SidebarDoc from '../components/SubDocumentation/SidebarDoc';

function Documentation({ children, active }) {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)

  return (
    <div>
      <HeaderDocumentation toggleMenu={ toggleMenu } menuOpen={open} />
      <div  className='d-flex'>
        <SidebarDoc active={active} expanded={open} toggleMenu={ toggleMenu }/>
        {children}
      </div>
    </div>
  )
}

export default Documentation

