import React from 'react';
import PropTypes from 'prop-types';
import './friend-style.css';
const FriendsList = ({ avatar, name, isOnline }) => (
  <li class="items">
    <span class="status">{isOnline} </span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </li>
);
FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};
export default FriendsList;
