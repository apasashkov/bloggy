import React, { Component } from 'react';
import Select from 'material-ui/Select';
import PropTypes from 'prop-types';

const styles = {
  selectStyles: {
    color: 'white',
    marginRight: '1em',
  },
  optionStyles: {
    color: 'black',
  },
};

class FilterSelect extends Component {
  onSelectChange = (e) => {
    this.props.changeFilterType(e.target.value);
  }

  render() {
    return (
      <Select
        native
        defaultValue="byTitle"
        onChange={this.onSelectChange}
        style={styles.selectStyles}
      >
        <option style={styles.optionStyles} value="byTitle">By Title</option>
        <option style={styles.optionStyles} value="byContent">By Content</option>
      </Select>
    );
  }
}
FilterSelect.propTypes = {
  changeFilterType: PropTypes.func.isRequired,
};

export default FilterSelect;
