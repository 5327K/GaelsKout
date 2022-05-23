import { View, ScrollView } from "react-native";

import PagePicker from "../components/PagePickerComponent";
import Loading from "../components/LoadingComponent";

import { api } from "../config";

import { Event } from "../api/Api";
import { useTailwind } from "tailwind-rn";
import { useEffect, useRef, useState } from "react";

import EventComponent from "../components/EventComponent";
import { useNavigation } from "@react-navigation/native";
import { MainScreenNavigationProp } from "./MainScreen";

const EventsScreen = () => {
  const tailwind = useTailwind();
  const totalPages = useRef<undefined | number>(undefined);
  const [eventsList, setEventsList] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const navigation = useNavigation<MainScreenNavigationProp["navigation"]>();

  const getData = async () => {
    const data = await api.events.eventGetEvents({ page: page });
    totalPages.current = data.data.meta?.last_page;
    setEventsList(data.data.data as Event[]);
  };

  // TODO: for testing only
  useEffect(() => {
    if (eventsList.length === 0) return;
    navigation.navigate("View Event", { id: eventsList[1].id })
  }, [eventsList]);

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [page]);

  return (
    <View style={tailwind("mt-2")}>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          {eventsList.map((event) => (
            <EventComponent key={event.id} event={event} />
          ))}
        </ScrollView>
      )}

      <PagePicker
        current={page}
        setCurrent={setPage}
        total={totalPages.current ?? page}
      />
    </View>
  );
};

export default EventsScreen;
