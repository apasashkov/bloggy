import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import TextField from 'material-ui/TextField';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import ViewsIcon from 'material-ui-icons/RemoveRedEye';
import DateRangeIcon from 'material-ui-icons/DateRange';
import AddIcon from 'material-ui-icons/Add';

import FilterSelect from './FilterSelect';

import { sortByDate, sortByViews, setTextFilter, setTextFilterType }
  from '../../actions/filters';

const styles = {
  elementsContainer: {
    display: 'flex',
    justifyContent: 'space-between',

  },
  iconButton: {
    color: 'white',
  },
  logoButton: {
    marginLeft: '30px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '2em',
  },
};

class Header extends Component {
  onSortByDate = () => {
    this.props.dispatch(sortByDate());
  }

  onSortByViews = () => {
    this.props.dispatch(sortByViews());
  }

  changeTextFilterType = (filterType) => {
    this.props.dispatch(setTextFilterType(filterType));
  }

  render() {
    return (
      <AppBar position="sticky" color="primary">
        <Toolbar style={styles.elementsContainer}>
          <NavLink
            style={styles.logoButton}
            to="/"
            exact
            activeClassName="is-active"
            className="brand-logo"
          >
            BLOGGY
          </NavLink>

          <div className="filter-options">
            <Tooltip title="Sort by views">
              <IconButton onClick={this.onSortByViews} style={styles.iconButton}>
                <ViewsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Sort by dates">
              <IconButton onClick={this.onSortByDate} style={styles.iconButton}>
                <DateRangeIcon />
              </IconButton>
            </Tooltip>
            <FilterSelect changeFilterType={this.changeTextFilterType} />
            <TextField
              value={this.props.filters.text}
              placeholder="Search"
              onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value));
              }}
              inputProps={{ style: { color: 'white' } }}
            />
          </div>
          <Tooltip title="Create New Post" style={{ marginTop: '10px', marginLeft: '10em' }}>
            <NavLink
              style={{ color: 'white', textDecoration: 'none' }}
              to="/posts/new"
              exact
              activeClassName="is-active"
              className="brand-logo"
            >
              <AddIcon />
            </NavLink>
          </Tooltip>

        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
};

const mapDispatchToProps = state => ({
  filters: state.filters,
});

export default connect(mapDispatchToProps)(Header);
