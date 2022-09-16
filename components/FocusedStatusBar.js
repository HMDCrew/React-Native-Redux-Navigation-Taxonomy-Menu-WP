import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

class FocusedStatusBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { isFocused } = this.props;

    return isFocused ? <StatusBar animated={true} {...this.props} /> : null;
  }
}

export default function(props) {
  const isFocused = useIsFocused();

  return <FocusedStatusBar {...props} isFocused={isFocused} />;
}
