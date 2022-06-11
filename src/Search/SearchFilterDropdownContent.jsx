/**
 * @author:  Emmanuel SMITH <hey@emmanuel-smith.me>
 * project:  react-learn-3
 * file:  SearchFilterDropdownContent.jsx
 * Date:  11/06/2022
 * Time:  19:09
 */
import PropTypes from 'prop-types';
import { Card, Collapse } from 'react-bootstrap';

export default function SearchFilterDropdownContent({ children, show }) {
  return (
    <Collapse in={show}>
      <Card>{children}</Card>
    </Collapse>
  );
}

SearchFilterDropdownContent.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.any
};
