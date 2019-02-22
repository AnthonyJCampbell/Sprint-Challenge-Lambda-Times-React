import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';


const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {

  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {tabs.map((tab, idx) => {
          return (
            <Tab key={idx} tab={tab} selectedTab={selectedTab} selectTabHandler={selectTabHandler} />
          );
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}

export default Tabs;
