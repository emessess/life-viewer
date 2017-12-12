import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const Home = (props) => {
  const {email, organisms} = props;

  return (
    <div>
      <h3>All Organisms</h3>
      {
        organisms && organisms.map(orga => (
          <div key={orga.id}>
          <NavLink to={`/organisms/${orga.id}`}>
              <h4>{orga.name}</h4>
              <img src={orga.images[0].url} height="900" width="600" />
          </NavLink>
          </div>
        ))
      }
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    organisms: state.organisms
  };
};

export default connect(mapState)(Home);

/**
 * PROP TYPES
 */
Home.propTypes = {
  email: PropTypes.string
};
