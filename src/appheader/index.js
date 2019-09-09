import React from "react";
import HeaderStyle from "./HeaderStyle";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import Images from "../util/Images";
import { Header } from "native-base";
const AppHeader = props => {
  const { title, titleStyle, showBackButton, navigation } = props;
  return (
    <Header style={HeaderStyle.parentContainer}>
      <StatusBar barStyle="light-content" />

      <View
        style={{ flexDirection: "row", marginBottom: 10, paddingHorizontal: 5 }}
      >
        <View style={{ flex: 0.5, justifyContent: "flex-start" }}>
          {showBackButton ? (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ alignItems: "flex-start" }}
            >
              <Image
                style={{ alignItems: "flex-start", height: 30, width: 30 }}
                source={Images.back}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={
              titleStyle != undefined
                ? titleStyle
                : HeaderStyle.titleDefaultStyle
            }
          >
            {title}
          </Text>
        </View>
        <View style={{ flex: 0.5 }}></View>
      </View>
    </Header>
  );
};

export default AppHeader;
