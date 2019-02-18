import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addCapacity } from "../../actions/CapacityActions";

export class AddCapacity extends Component {
  state = {
    techStack: "",
    numOfDevelopers: 0,
    numOfAvailableDevelopers: 0,
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { techStack, numOfDevelopers, numOfAvailableDevelopers } = this.state;
    const newCapacity = {
      techStack,
      numOfDevelopers,
      numOfAvailableDevelopers
    };

    this.props.addCapacity(
      newCapacity,
      this.props.closeModal,
      this.props.postLink
    );
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    }
    return null;
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header bg-primary text-light">Add Capacity</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="techStack">Technology Stack</label>
              <input
                type="text"
                name="techStack"
                value={this.state.techStack}
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.techStack
                })}
                onChange={this.onChange}
              />
              {errors.techStack && (
                <div className="invalid-feedback">{errors.techStack}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="numOfDevelopers">
                Total Developers in Capacity
              </label>
              <input
                type="number"
                name="numOfDevelopers"
                value={this.state.numOfDevelopers}
                className="form-control form-control-lg"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="numOfAvailableDevelopers">
                Available developers for hire
              </label>
              <input
                type="number"
                name="numOfAvailableDevelopers"
                value={this.state.numOfAvailableDevelopers}
                className="form-control form-control-lg"
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add Capacity"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddCapacity.propTypes = {
  addCapacity: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  postLink: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  postLink: state.capacity.links.createCapacity.href
});

export default connect(
  mapStateToProps,
  { addCapacity }
)(AddCapacity);
