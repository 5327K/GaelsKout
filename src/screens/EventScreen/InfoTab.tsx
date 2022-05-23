import { View, Text, FlatList } from "react-native";
import Assert from "../../components/AssertComponent";
import Loading from "../../components/LoadingComponent";

import { useState, useEffect } from "react";
import { useTailwind } from "tailwind-rn";

import { PaginatedTeam } from "../../api/Api";
import { api } from "../../config";

import { EventData } from ".";

const InfoTab = ({ eventData }: { eventData: undefined | EventData }) => {
  const tailwind = useTailwind();

  const [teams, setTeams] = useState<undefined | PaginatedTeam>(undefined);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (!eventData) return;

      const newData = (
        await api.events.eventGetTeams(eventData.event.id, { page })
      ).data;

      if (isMounted)
        setTeams({
          ...newData,
          data: [...(teams?.data || []), ...(newData.data || [])] || undefined,
        });
    })();

    return () => {
      isMounted = false;
    };
  }, [eventData, page]);

  return !eventData || !teams ? (
    <Loading />
  ) : (
    Assert(
      tailwind,
      !teams.data || !teams.meta || !teams.meta.last_page,
      "Team data was not found successfully."
    ) || (
      <View style={tailwind("flex flex-col h-full m-4")}>
        <View
          style={tailwind(
            "flex flex-col bg-white p-4 pb-2 mb-4 rounded border-2 border-gray-300"
          )}
        >
          {Object.keys(eventData.data).map((title) => (
            <View style={tailwind("flex flex-row mb-2")} key={title}>
              <Text style={tailwind("text-left grow font-bold")}>{title}</Text>
              <Text style={tailwind("text-right grow")}>
                {eventData.data[title]}
              </Text>
            </View>
          ))}
        </View>

        <FlatList
          data={teams.data}
          renderItem={({ item: team }) => (
            <Text key={team.id}>{team.number}</Text>
          )}
          onEndReached={() => {
            if (!teams.meta?.last_page)
              throw "Last page should not be undefined (this should be checked beforehand)";

            if (page < teams.meta.last_page) setPage(page + 1);
          }}
        />
      </View>
    )
  );
};

export default InfoTab;
