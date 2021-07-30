import React, { useState } from "react";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import * as MdIcons from "react-icons/md";
import styled from "styled-components";

const SearchInput = styled(InputBase)`
  height: 2.5rem;
  border-radius: 20px;
  background-color: white;
  width: 200px;
  padding: 5px;
  margin-left: 10px;
  /* font */
  font-size: 14px;
  line-height: 17px;
  color: black;

  &::placeholder {
    color: rgba(51, 64, 79, 0.5);
  }
`;

const NavbarSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
  };

  return (
    <SearchInput
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      endAdornment={
        <IconButton onClick={handleSearch} size="small">
          <MdIcons.MdSearch color="limegreen" size={25} />
        </IconButton>
      }
    />
  );
};

NavbarSearch.propTypes = {
  t: PropTypes.any,
};

export default NavbarSearch;
