import React from 'react';
import PropTypes from 'prop-types';
import './friend-style.css';
const FriendsList = ({ friendsListData }) => {
  return (
    <ul class="friend-list">
      {friendsListData.map(({ isOnline, name, avatar }) => (
        <li class="items">
          <span class="status">{`${isOnline ? '🔴' : '🟢'}`}</span>
          <img class="avatar" src={avatar} alt={name} width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};
export default FriendsList;
