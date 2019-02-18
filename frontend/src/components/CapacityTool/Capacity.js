import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCapacity } from "../../actions/CapacityActions";
import UpdateIcon from "./UpdateIcon";

export class Capacity extends Component {
  deleteCapacity = (id, deleteLink) => {
    this.props.deleteCapacity(id, deleteLink);
  };

  render() {
    const {
      id,
      numOfAvailableDevelopers,
      numOfDevelopers,
      techStack,
      _links
    } = this.props.capacity;

    return (
      <div className="card card-body border-primary mb-3">
        <h4 className="text-primary">
          {techStack} ...{_links.getThisCapacity.href}
          <UpdateIcon id={id} />
          <i
            className="fas fa-user-times ml-2"
            style={{ color: "red" }}
            onClick={this.deleteCapacity.bind(
              this,
              id,
              _links.deleteThisCapacity.href
            )}
          />
        </h4>

        <ul className="list-group">
          <li className="list-group-item bg-light text-primary">
            Technology Stack: {techStack}
          </li>
          <li className="list-group-item bg-light  text-primary">
            Total Developers in Capacity: {numOfDevelopers}
          </li>
          <li className="list-group-item bg-light  text-primary">
            Available developers for hire: {numOfAvailableDevelopers}
          </li>
        </ul>
      </div>
    );
  }
}

Capacity.propTypes = {
  capacity: PropTypes.object.isRequired,
  deleteCapacity: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCapacity }
)(Capacity);
