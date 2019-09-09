import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getNewsList } from "./NewsActions";
type Props = {};

export class NewsList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>helo from get news component</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { NewsReducer } = state;
  const { data, isFetching, success, failure, error } = NewsReducer;
  return {
    data,
    isFetching,
    success,
    failure,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getNewsList: bindActionCreators(getNewsList, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
const styles = StyleSheet.create({
  container: {}
});
