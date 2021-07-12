import React from 'react';
import PropTypes from 'prop-types';
import './style-stat.css';
const Statistical = ({
  labelOne,
  percentageOne,
  labelTwo,
  percentageTwo,
  labelThree,
  percentageThree,
  labelFor,
  percentageFor,
}) => (
  <section class="statistics">
    <h2 class="title">Upload stats</h2>

    <ul class="stat-list">
      <li class="item">
        <span class="label">{labelOne}</span>
        <span class="percentage">{percentageOne}%</span>
      </li>
      <li class="item">
        <span class="label">{labelTwo}</span>
        <span class="percentage">{percentageTwo}%</span>
      </li>
      <li class="item">
        <span class="label">{labelThree}</span>
        <span class="percentage">{percentageThree}%</span>
      </li>
      <li class="item">
        <span class="label">{labelFor}</span>
        <span class="percentage">{percentageFor}%</span>
      </li>
    </ul>
  </section>
);
Statistical.propTypes = {
  labelOne: PropTypes.string.isRequired,
  labelTwo: PropTypes.string.isRequired,
  labelThree: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  percentageOne: PropTypes.number.isRequired,
  percentageTwo: PropTypes.number.isRequired,
  percentageThree: PropTypes.number.isRequired,
  percentageFor: PropTypes.number.isRequired,
};
export default Statistical;
