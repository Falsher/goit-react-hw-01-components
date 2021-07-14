import React from 'react';
import PropTypes from 'prop-types';
import './style-stat.css';
const Statistical = ({ statisticalData }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {statisticalData.map(({ label, percentage }) => (
          <li class="item">
            <span class="label">{label} </span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistical.propTypes = {
  statisticalData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistical;
