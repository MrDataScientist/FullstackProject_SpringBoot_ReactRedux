import React, { Component } from "react";
import Modal from "react-modal";
import AddCapacity from "./AddCapacity";
import { closeModalClearState } from "../../actions/CapacityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const customStyles = {
  content: {
    height: "500px"
  }
};

export class AddButton extends Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.props.closeModalClearState();
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <React.Fragment>
          <button
            type="button"
            className="btn btn-outline-primary mb-3 text-left"
            onClick={this.openModal}
          >
            <i className="far fa-plus-square" /> Add Capacity
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            style={customStyles}
            ariaHideApp={false}
          >
            <button
              type="button"
              className="btn btn-danger mb-2"
              onClick={this.closeModal}
            >
              <i className="far fa-times-circle mr-1 " />
              Close Modal
            </button>
            <AddCapacity closeModal={this.closeModal} />
          </Modal>
        </React.Fragment>
      </div>
    );
  }
}

AddButton.propTypes = {
  closeModalClearState: PropTypes.func.isRequired
};

export default connect(
  null,
  { closeModalClearState }
)(AddButton);
