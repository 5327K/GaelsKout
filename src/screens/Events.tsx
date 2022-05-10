import { registerRootComponent } from "expo";
import {
  Text,
  View,
  ScrollView,
  Button,
  ActivityIndicator,
} from "react-native";

import PagePicker from "../components/PagePicker";

import { Api, Event } from "../../api/Api";
import { useTailwind } from "tailwind-rn";
import { useEffect, useRef, useState } from "react";
import EventComponent from "../components/Event";

const EventsScreen = () => {
  const tailwind = useTailwind();
  const totalPages = useRef<undefined | number>(undefined);
  const [eventsList, setEventsList] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getData = async () => {
    setLoading(true);
    const data = await api.events.eventGetEvents({ page: page });
    totalPages.current = data.data.meta?.last_page;
    setEventsList(data.data.data as Event[]);
    setLoading(false);
  };

  const api = new Api({
    baseApiParams: {
      headers: {
        Authorization: "Bearer " + process.env.ROBOTS_API_KEY,
      },
    },
  });

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <View style={tailwind("mt-2")}>
      {loading ? (
        <View
          style={tailwind("h-full w-full flex justify-center items-center")}
        >
          <ActivityIndicator size="large" color="#2243ff" />
        </View>
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
