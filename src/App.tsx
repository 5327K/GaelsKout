import { registerRootComponent } from "expo";

import { TailwindProvider } from "tailwind-rn";
import utilities from "../tailwind.json";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventScreen from "./screens/Event";
import MainScreen from "./screens/Main";

import { RootStackParamList, api } from "./config";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Event"
            component={EventScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default registerRootComponent(App);
