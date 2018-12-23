import React from "react";
import "./style.css";
// import friends from "../../friends.json";

// state = {
//   friends
// };


// clickFriend 
// function clickFriend() {
//   // Filter this.state.friends for friends with an id not equal to the id being clickd
  // const friends = this.props.filter(friend => friend.clicked !== true);
//   // Set this.state.friends equal to the new friends array
//   this.setState({ friends });
// };

// // shuffleData
// function shuffleData() {
//   let i = friends.length - 1;
//   while (i > 0) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = friends[i];
//     friends[i] = friends[j];
//     friends[j] = temp;
//     i--;
//   }
//   return friends;
// };


function FriendCard(props) {
  // const id = props.id;
  // const friend = props.friend;
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>id: </strong> {props.id}
          </li>
          <li>
            {/* <strong>Occupation:</strong> {props.occupation} */}
          </li>
          <li>
            {/* <strong>Location:</strong> {props.location} */}
          </li>
          <li>
            <strong>Clicked:</strong> {props.clicked}
          </li>
        </ul>
      </div>
      <span className="remove">
        <button className="btn btn-primary" onClick={() => props.clickFriend(props.id)}>X</button>
      </span>
    </div>
  );
}

export default FriendCard;
