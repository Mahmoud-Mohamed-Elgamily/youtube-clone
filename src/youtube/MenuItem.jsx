import React from 'react'

const MenuItem = ({ title, Icon }) => {
  return (
    <div className="menu-item">
      <Icon />
      <h3> {title} </h3>
    </div>
  )
}

export default MenuItem
