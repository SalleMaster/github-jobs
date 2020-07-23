import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Component
import Job from './Job';

// Actions
import { getJobs } from '../actions/job';

const Jobs = ({ getJobs, job }) => {
  useEffect(() => {
    console.log('this ran');
    getJobs();
  }, [getJobs]);

  const { jobs, loading, error } = job;

  return (
    <Fragment>
      {loading && <h3>Loading...</h3>}
      {error && <h3 className='text-danger'>Error: {error.msg}</h3>}
      {!loading && jobs && jobs.map((job) => <Job job={job} key={job.id} />)}
    </Fragment>
  );
};

Jobs.propTypes = {
  getJobs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  job: state.job,
});

export default connect(mapStateToProps, { getJobs })(Jobs);
