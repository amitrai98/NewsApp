import { createAppContainer } from "react-navigation";
import NewsList from "./screens/newslist/NewsList";
import { createStackNavigator } from "react-navigation-stack";

  import NewsDetail from "./screens/newsdetail/NewsDetail";

const StackNavigator = createStackNavigator(
  {
    NewsList: { screen: NewsList },
    NewsDetail: {screen:NewsDetail}
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
