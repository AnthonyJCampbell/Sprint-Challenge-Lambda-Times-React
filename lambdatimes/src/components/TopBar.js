import React from 'react';

import StyledTopBar from './StyledTopBar/StyledTopBar';
import StyledLeft from './StyledTopBar/StyledLeft';
import StyledCenter from './StyledTopBar/StyledCenter';
import StyledRight from './StyledTopBar/StyledRight';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file




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