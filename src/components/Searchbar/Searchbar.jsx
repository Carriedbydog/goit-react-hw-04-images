import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledFormBtnSpan,
  StyledFormButton,
  StyledFormInput,
  StyledHeader,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    q: '',
  };
  handleChange = e => {
    this.setState({ q: e.target.value.trim() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onChangeQuery(this.state.q);
    this.setState({ q: '' });
  };

  render() {
    return (
      <StyledHeader>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledFormButton type="submit">
            <StyledFormBtnSpan>Search</StyledFormBtnSpan>
          </StyledFormButton>

          <StyledFormInput
            type="text"
            value={this.state.q}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
          />
        </StyledForm>
      </StyledHeader>
    );
  }
}

Searchbar.propTypes = {
  onChangeQuery: PropTypes.func,
};
