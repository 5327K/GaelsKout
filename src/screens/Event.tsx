import { api, RootStackParamList } from "../config";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { View, Text } from "react-native";
import { useEffect, useState } from "react";

import combineEventInfo from "../util/combineEventInfo";

import Loading from "../components/Loading";

export type EventScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Event"
>;

const EventScreen = ({ route }: EventScreenNavigationProp) => {
  const { id } = route.params;
  const [eventData, setEventData] = useState<
    undefined | { event: Event; data: Record<string, string> }
  >(undefined);

  useEffect(() => {
    (async () => {
      const event = await api.events.eventGetEvent(id);
      const info = await combineEventInfo(event.data);

      setEventData({
        event: event.data,
        data: info,
      });
    })();
  }, []);

  return !eventData ? (
    <Loading />
  ) : (
    <View>
      
      <Text>{JSON.stringify(eventData, undefined, 4)}</Text>
    </View>
  );
};

export default EventScreen;
