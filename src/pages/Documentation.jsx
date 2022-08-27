import React from 'react'
import HeaderDocumentation from '../components/SubDocumentation/HeaderDocumentation'
import SidebarDoc from '../components/SubDocumentation/SidebarDoc';
import ContentDoc from '../components/SubDocumentation/ContentDoc';

function Documentation() {
  return (
    <div>
      <HeaderDocumentation />
      <div  className='d-flex'>
        <SidebarDoc />
        <ContentDoc />
      </div>
    </div>
  )
}

export default Documentation

