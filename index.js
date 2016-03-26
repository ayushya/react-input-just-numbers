'use strict';

import React from 'react';

class InputNumber extends React.Component {
  render () {
    let inputProps = {...this.props};
    delete inputProps.onlydigits;
    return (
        <input type="number"
        pattern={this.props.onlydigits && navigator.userAgent.match(/iPhone|iPad|iPod/i) ? `[0-9]*` : ''}
        onWheel={(e) => { e.target.blur() }}
        onKeyDown={(e) => {if(e.keyCode == '38' || e.keyCode == '40') return e.preventDefault()}} {...inputProps}/>
    );
  }
}

export default InputNumber;
