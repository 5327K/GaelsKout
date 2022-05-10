import { View, Text, ViewProps } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { Event } from "../../api/Api";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const EventComponent = ({ event, ...props }: ViewProps & { event: Event }) => {
  const tailwind = useTailwind();

  return (
    <View
      {...props}
      style={{
        ...(props.style as Record<string, unknown>),
        ...tailwind("bg-gray-200 mb-2 rounded mx-2 p-2 flex flex-row"),
      }}
    >
      <View>
        <Text numberOfLines={1}>{event.name}</Text>
        <Text style={tailwind("text-gray-700")}>More info goes here! (sku: {event.sku})</Text>
      </View>

      <View style={tailwind("mr-0 ml-auto justify-center")}>
        <MaterialIcons name="arrow-right" size={24} />
      </View>
    </View>
  );
};

export default EventComponent;
