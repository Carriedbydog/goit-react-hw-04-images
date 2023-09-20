import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledFormBtnSpan,
  StyledFormButton,
  StyledFormInput,
  StyledHeader,
} from './Searchbar.styled';

export const Searchbar = ({ onChangeQuery }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.trim());
  };
  const handleSubmit = e => {
    e.preventDefault();
    onChangeQuery(query);

    setQuery('');
  };

  return (
    <StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormButton type="submit">
          <StyledFormBtnSpan>Search</StyledFormBtnSpan>
        </StyledFormButton>

        <StyledFormInput
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};

Searchbar.propTypes = {
  onChangeQuery: PropTypes.func,
};
