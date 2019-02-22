import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tab from './Tab';

const TabsContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    .tabs {
      width: 1280px;
    }
  }
`;

const TopicsContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TitleSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsContainer>
      <TopicsContainer>
        <TitleSpan>TRENDING TOPICS:</TitleSpan>
        {props.tabs.map(tab => <Tab
          tab={tab}
          selectedTab={props.selectedTab}
          selectTabHandler={props.selectTabHandler}
        />)}
      </TopicsContainer>
    </TabsContainer>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;
