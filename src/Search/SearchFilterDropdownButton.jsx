/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  SearchFilterDropdown.jsw.js
 * Date:  11/06/2022
 * Time:  18:54
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function SearchFilterDropdownButton({ label, onShow }) {
  const [show, setShow] = useState(false);

  const onClickSearchLink = () => {
    setShow(!show);
    onShow(!show);
  };

  return (
    <div className="search-link" onClick={onClickSearchLink}>
      <small>{label}</small>
      {show ? (
        <FontAwesomeIcon icon="angle-up" />
      ) : (
        <FontAwesomeIcon icon="angle-down" />
      )}
    </div>
  );
}

SearchFilterDropdownButton.propTypes = {
  label: PropTypes.string.isRequired,
  onShow: PropTypes.func.isRequired
};
