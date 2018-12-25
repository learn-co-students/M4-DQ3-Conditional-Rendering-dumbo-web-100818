import React from 'react'

const MenuBar = (props) => {

  return (
    <div className="ui four item menu">
      <a onClick={props.handleClick} className="item active" id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={props.handleClick} className="item" id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={props.handleClick} className="item" id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={props.handleClick} className="item" id="pokemon">
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
