import React from 'react';
import StyledTopBar from './TopBar/StyledTopBar';
import StyledLeft from './TopBar/StyledLeft';
import StyledCenter from './TopBar/StyledCenter';
import StyledRight from './TopBar/StyledRight';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

import styled from 'styled-components';



const TopBar = () => {
  return (
    <StyledTopBar>
      <div>
        <StyledLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </StyledLeft>
        <StyledCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </StyledCenter>
        <StyledRight>
          <span>LOG IN</span>
        </StyledRight>
      </div>
    </StyledTopBar>
  )
}

export default TopBar;