import { registerRootComponent } from "expo";

import { TailwindProvider } from "tailwind-rn";
import utilities from "../tailwind.json";

import { NavigationContainer } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventsScreen from "./screens/Events";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Events"
            component={EventsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="calendar-today"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default registerRootComponent(App);
