import { registerRootComponent } from "expo";
import { Text, View } from "react-native";

import { Api } from "../api/Api";

import { TailwindProvider, useTailwind } from "tailwind-rn";
import utilities from "../tailwind.json";

const Test = () => {
  const tailwind = useTailwind();

  const api = new Api({
    baseApiParams: {
      headers: {
        Authorization: "Bearer " + process.env.ROBOTS_API_KEY,
      },
    },
  });

  api.events
    .eventGetEvents({
      page: 10,
    })
    .then((val) => console.log(JSON.stringify(val)));

  return (
    <View style={tailwind("flex justify-center items-center h-full")}>
      <Text style={tailwind("text-blue-600 text-6xl leading-[3.75rem]")}>stuff goes here!</Text>
    </View>
  );
};

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <Test />
    </TailwindProvider>
  );
};

export default registerRootComponent(App);
