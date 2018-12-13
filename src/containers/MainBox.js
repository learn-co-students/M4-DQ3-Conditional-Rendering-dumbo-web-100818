import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'


class MainBox extends React.Component {

  state={
    isClicked: ''
  }

  handleUserClick=(e)=>{
    this.handleClick(e.target.id)
  }



  handleClick =(e)=>{
      let clicked;
    if(e === "profile"){
      clicked= <Profile/>
    }else if(e === "photo"){
      clicked= <Photos/>
    }else if(e === "cocktail"){
      clicked =<Cocktails/>
    }else if(e === "pokemon"){
      clicked= <Pokemon/>
    }
    this.setState({
      isClicked:clicked
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */



    return (
      <div>
        <MenuBar clickHandler={this.handleUserClick}/>
        {this.state.isClicked}
      </div>
    )
  }

}

export default MainBox
