import React from 'react'
import HomeTitle from './HomeTitle/HomeTitle.js';
// import HomeDetail from './HomeDetail.js';

// This container will position all of the contents of this page inside a flexbox
/**
 * This will include a title, logos, blurb and links to relevant accounts.
 * 
 * I am only building the portfolio for what I have done, which at the moment is nothing.
 */
function ContentContainer() {
  return (
    <div style={containerLayoutStyle}>
      <div class="row" style={flexRow}>
        <div class="item" style={flexItem}>
        </div>
        <div class="item" style={flexItem}>
        </div>
      </div>
      <div class="row" style={flexRow}>
        <div class="item" style={flexItem}>
          <HomeTitle />
        </div>
        <div class="item" style={flexItem}>
          {/* <HomeDetail /> */}
        </div>
      </div>
      <div class="row" style={flexRow}>
        <div class="item" style={flexItem}> 
        </div>
        <div class="item" style={flexItem}>
        </div>
      </div>
      
      
    </div>
  )
} 
export default ContentContainer;

const containerLayoutStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'stretch'
}

const flexRow = {
  width: '100%',
  height: '33.3%',
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'stretch'
  
}

const flexItem = {
  display: 'flex',
  margin: '10px',
  alignContent: 'stretch',
  alignItems: 'stretch',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  flexBasis: '50%'
}