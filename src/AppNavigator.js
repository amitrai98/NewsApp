import { createAppContainer } from "react-navigation";
import NewsList from "./screens/newslist/NewsList";
import { createStackNavigator } from "react-navigation-stack";

//   import UserDetails from "./userdetails/UserDetails";

const StackNavigator = createStackNavigator(
  {
    NewsList: { screen: NewsList }
  },
  {
    initialRouteName: "NewsList",
    defaultNavigationOptions: {
      header: null
    }
  }
);
const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
