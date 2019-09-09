import React, { Component } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {getNewsDetail} from "./NewsDetailActions";
import AppHeader from "../../appheader"
import Loader from '../../util/Loader';

type Props = {};

export class NewsDetail extends Component<Props> {
  constructor(props) {
 super(props);
    this.state = {};
  }
  render() {
      const {isFetching, navigation}= this.props;
      const {newsItem}=navigation.state.params;
    return (
      <View>
       <AppHeader navigation={navigation} showBackButton={true} />
        <Loader loading={isFetching}  />
        <ScrollView style={{margin:10}}>
        <View>
        <Text style={{fontSize:18, marginTop:5}}>{newsItem.title}</Text>
        <Text style={{fontSize:16, marginTop:10}}>{newsItem.abstract}</Text>
        <Text style={{fontSize:14, marginTop:10}}>{newsItem.byline}</Text>
        <Text style={{fontSize:12, marginTop:20}}>{newsItem.source}</Text>
        <Text style={{fontSize:12, marginTop:2}}>{newsItem.published_date}</Text>
        </View>
       

        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
    const { NewsDetailReducer } = state;
    const { data, isFetching, success, failure, error } = NewsDetailReducer;
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
    getNewsDetail: bindActionCreators(getNewsDetail, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsDetail);
const styles = StyleSheet.create({
  container: {
    
  }
});
