import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { getJobs } from '../actions/job';

const Jobs = ({ getJobs }) => {
  useEffect(() => {
    getJobs();
  }, []);

  return <div></div>;
};

Jobs.propTypes = {
  getJobs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.jobs,
});

export default connect(mapStateToProps, { getJobs })(Jobs);
