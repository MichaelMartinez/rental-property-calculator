import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import TextInput from '../../TextInput'
import '../modal.css'
import BlueButton from '../../BlueButton'

class SaveAsModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleSaveClick = () => {
    this.props.saveCalculation(
      this.state.value,
      this.props.calculationToSave
    )
    this.props.hideModal()
  }

  handleCancelClick = () => {
    this.props.hideModal()
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <Modal
        isOpen={true}
        className='modal'
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={this.props.hideModal}
      >
        <p>
          Enter a title for your new calculation.
        </p>
        <TextInput type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className='buttons'>
          <BlueButton onClick={this.handleSaveClick}>Save</BlueButton>
          <BlueButton onClick={this.handleCancelClick}>Cancel</BlueButton>
        </div>
      </Modal>
    )
  }
}

SaveAsModal.propTypes = {
  calculationToSave: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  saveCalculation: PropTypes.func.isRequired
}

export default SaveAsModal