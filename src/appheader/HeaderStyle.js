import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({
  parentContainer: {
    backgroundColor: "green",
    justifyContent: "flex-end",
    height: "10%"
  },

  titleDefaultStyle: {
    color: "white",
    alignSelf: "center",
    paddingVertical: 5,
    fontSize: 18
  }
});

export default HeaderStyle;
