import EventsScreen from "./EventsScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../config";

const Tab = createBottomTabNavigator();

export type MainScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Main"
>;

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="calendar-today" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
