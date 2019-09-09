import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "native-base";
import { isEmpty } from "../../../util/Utility";

const newsItem = props => {
  const { newsItem } = props;
  let imageUrl = "";
  
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: "gray",
        paddingVertical: 10,
        paddingHorizontal: 2,
        marginTop: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: "gray"
      }}
    >
      <View style={{ flex: 0.3,  }}>
        {imageUrl !== "" ? <Image source={{ uri: newsItem.url }} /> : null}
      </View>

      <View style={{ flex: 0.7, }}>
        <Text numberOfLines={2}>{newsItem.title}</Text>
        <Text numberOfLines={1} style={{ marginTop: 10 }}>{newsItem.byline}</Text>
        <Text style={{alignSelf:'flex-end'}}>{newsItem.published_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default newsItem;
