import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  handleUserClick=(e)=>{
    if(e.target.id === "profile"){
      console.log("profile click")
    }else if(e.target.id === "photo"){
      console.log("photo click")
    }else if(e.target.id === "cocktail"){
      console.log("cocktail click")
    }else if(e.target.id === "pokemon"){
      console.log("pokemon click")
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */



    return (
      <div>
        <MenuBar clickHandler={this.handleUserClick}/>

      </div>
    )
  }

}

export default MainBox
