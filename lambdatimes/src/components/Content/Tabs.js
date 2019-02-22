import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

import StyledTabs from './StyledComponents/StyledTabs';
import StyledTopics from './StyledComponents/StyledTopics';

const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {

  return (
    <StyledTabs >
      <StyledTopics>
        <span>TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {tabs.map((tab, idx) => {
          return (
            <Tab key={idx} tab={tab} selectedTab={selectedTab} selectTabHandler={selectTabHandler} />
          );
        })}
      </StyledTopics>
    </StyledTabs>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}

export default Tabs;
