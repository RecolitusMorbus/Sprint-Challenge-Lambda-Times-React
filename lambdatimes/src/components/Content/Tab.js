import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  :hover {
    text-decoration: underline;
  }
`;

const ActiveTab = styled.div`
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`;

const Tab = props => {
  const onTabSelected = ActiveTab;
  const allTabsSelected = TabContainer;
  
  return (
    <TabContainer
      tab={props.tab === props.selectedTab ? onTabSelected : allTabsSelected}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </TabContainer>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.func,
  selectTabHandler: PropTypes.string
}

export default Tab;
