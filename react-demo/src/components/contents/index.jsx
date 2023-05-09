import React, { memo } from 'react'
import './index.less'

import {navTitle} from '@/assets/data/nav-title.js'
import { useNavigate } from 'react-router-dom'
export default  memo(() => {
  const nav = useNavigate();
  const navigateToView = (path) => {
    nav(path);
  }
  return (
    <div className='contents-wrapper'>
        {navTitle.map(nav => (
            <div 
              className='contents'
              key={nav.meta} 
              onClick={() => navigateToView(nav.meta)} 
            >
              {nav.title}
            </div>
        ))}
    </div>
  )
})

