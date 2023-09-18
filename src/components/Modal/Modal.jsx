import React, { Component } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  onBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.close();
    }
  };
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.close();
    }
  };
  componentDidMount() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return (
      <StyledOverlay onClick={this.onBackDropClick}>
        <StyledModal>
          <img src={this.props.currentImg} alt="Large Img" />
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  currentImg: PropTypes.string,
  close: PropTypes.func,
};
