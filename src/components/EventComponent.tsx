import { View, Text, ViewProps, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import { Event } from "../api/Api";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import formatDate from "../util/formatDate";
import { useNavigation } from "@react-navigation/native";
import { MainScreenNavigationProp } from "../screens/MainScreen";

const EventInfo = ({
  icon,
  text,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  text: string;
}) => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex flex-row")}>
      <MaterialIcons
        name={icon}
        size={16}
        style={tailwind("mt-[1.5px] mr-1")}
      />
      <Text style={tailwind("text-gray-700")}>{text}</Text>
    </View>
  );
};

interface EventProps extends ViewProps {
  event: Event;
}

const EventComponent = ({ event, ...props }: EventProps) => {
  const tailwind = useTailwind();
  const navigation = useNavigation<MainScreenNavigationProp["navigation"]>();

  return (
    <Pressable
      {...props}
      style={{
        ...(props.style as Record<string, unknown>),
        ...tailwind("bg-gray-200 mb-2 rounded mx-2 p-2 flex flex-row"),
      }}
      onPress={() =>
        navigation.navigate("View Event", {
          id: event.id,
        })
      }
    >
      <View>
        <Text numberOfLines={1}>{event.name}</Text>

        <EventInfo
          icon="location-on"
          text={`${event.location.city || "Unknown"}, ${
            event.location.region || "Unknown"
          }`}
        />

        {event.start && (
          <EventInfo
            icon={"schedule"}
            text={formatDate(new Date(event.start))}
          />
        )}
      </View>

      <View style={tailwind("mr-0 ml-auto justify-center")}>
        <MaterialIcons name="arrow-right" size={24} />
      </View>
    </Pressable>
  );
};

export default EventComponent;
