import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getNewsList } from "./NewsActions";
import AppHeader from "../../appheader";
import NewsListItem from "./newslistcomponents/NewsListItem";
import Loader from "../../util/Loader";
type Props = {};

export class NewsList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      refresing:false
    };
  }

  componentDidMount() {
    const { getNewsList } = this.props;
    getNewsList({ since: 1 });
  }

  componentDidUpdate(prevProps) {
    const { isFetching, data, success, failure, error } = this.props;
    if (prevProps.isFetching !== isFetching && !isFetching) {
      if (success) {
        console.log("success response" + data);
        this.setState({ newsList: data.results });
      } else if (failure) {
        console.log("caught an error" + error);
      }
    }
  }

  render() {
    const { navigation, isFetching } = this.props;
    const { newsList,refresing } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <AppHeader navigation={navigation} />
        <Loader loading={isFetching} />
        <View style={{ flex: 1, }}>
          <FlatList
            data={newsList}
            renderItem={({ item, index }) => (
              <NewsListItem newsItem={item} index={index} />
            )}
            refreshing={refresing}

            onRefresh={()=>{
              getNewsList({ since: 1 });
            }}
          />
        </View>
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
