import { api, RootStackParamList } from "../../config";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { TabView } from "react-native-tab-view";

import { View, Text } from "react-native";
import { useEffect, useState } from "react";

import { Event } from "../../api/Api";
import combineEventInfo from "../../util/combineEventInfo";

import { useTailwind } from "tailwind-rn/dist";

import InfoTab from "./InfoTab";
import AwardsTab from "./AwardsTab";
import RankingsTab from "./RankingsTab";

export type EventScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "View Event"
>;

export type EventData = { event: Event; data: Record<string, string> };

const EventScreen = ({ route, navigation }: EventScreenNavigationProp) => {
  const tailwind = useTailwind();

  const { id } = route.params;
  const [eventData, setEventData] = useState<undefined | EventData>(undefined);

  const renderScene = ({
    route,
  }: {
    route: { key: string; title: string };
  }) => {
    switch (route.key) {
      case "info":
        return <InfoTab eventData={eventData} />;
      case "rankings":
        return <RankingsTab />;
      case "awards":
        return <AwardsTab />;
      default:
        return null;
    }
  };

  const [tabIndex, setTabIndex] = useState(0);
  const [tabRoutes] = useState([
    { key: "info", title: "Info" },
    { key: "rankings", title: "Rankings" },
    { key: "awards", title: "Awards" },
  ]);

  useEffect(() => {
    (async () => {
      const event = await api.events.eventGetEvent(id);
      const info = await combineEventInfo(event.data);

      navigation.setOptions({ title: event.data.name });

      setEventData({
        event: event.data,
        data: info,
      });
    })();
  }, []);

  return (
    <View style={tailwind("h-full")}>
      <TabView
        navigationState={{ index: tabIndex, routes: tabRoutes }}
        onIndexChange={setTabIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

export default EventScreen;
