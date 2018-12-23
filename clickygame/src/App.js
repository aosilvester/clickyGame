import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: "",
    topScore: ""

  };

  clickFriend = (id) => {
    console.log("clickFriend activated");
    console.log(id)

    // set it so that the specific friend clicked is set to (friend.clicked === true)
    // friend.clicked === true;  
 
    // console.log(friend)
    // Filter this.state.friends for friends with an id not equal to the id being clickd
    const friendClicked = this.state.friends.filter(friend => friend.id === id);
    // Set this.state.friends equal to the new friends array
    console.log(friendClicked);

    // console.log(friends.id)
    friendClicked.clicked = true

    this.setState({ friends });

    // set friend.clicked = "true"
    // this.setState({clicked = true})

  };

  shuffleData = friends => {
    let i = friends.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
      i--;
    }
    return friends;
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked ? "true" : "false"}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;