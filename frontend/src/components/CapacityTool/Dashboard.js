import React, { Component } from "react";
import AddButton from "./AddButton";
import Capacity from "./Capacity";
import { connect } from "react-redux";
import { getAllCapacities } from "../../actions/CapacityActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllCapacities();
  }

  render() {
    const { capacities } = this.props;
    return (
      <React.Fragment>
        <AddButton />
        {capacities.map(capacity => (
          <Capacity key={capacity.id} capacity={capacity} />
        ))}
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getAllCapacities: PropTypes.func.isRequired,
  capacities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  capacities: state.capacity.capacities
});

export default connect(
  mapStateToProps,
  { getAllCapacities }
)(Dashboard);
