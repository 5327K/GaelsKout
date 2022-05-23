import { View, Pressable, Text, ViewProps } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useTailwind } from "tailwind-rn";
import tailwindConfig from "../../tailwind.config";

const PageButton = ({
  number,
  setCurrent,
  current = false,
}: {
  number: number;
  setCurrent: (to: number) => void;
  current?: boolean;
}) => {
  const tailwind = useTailwind();

  return (
    <Pressable
      style={tailwind(
        `${
          current ? "border-2 border-blue-600" : ""
        } rounded-full h-6 min-w-6 px-1.5 flex justify-center items-center mr-1`
      )}
      onPress={() => setCurrent(number)}
    >
      <Text style={tailwind("text-black text-xs")}>{number}</Text>
    </Pressable>
  );
};

const PagePicker = ({
  current,
  setCurrent,
  total,
  ...props
}: ViewProps & {
  current: number;
  setCurrent: (to: number) => void;
  total: number;
}) => {
  const tailwind = useTailwind();

  return (
    <View
      {...props}
      style={{
        ...(props.style as Record<string, unknown>),
        ...tailwind(
          "mt-2 absolute w-full bottom-2 items-center"
        ),
      }}
    >
      <View style={tailwind("flex justify-center items-center flex-row bg-blue-100 border-2 border-blue-300 rounded-full py-2 px-4")}>
        <Pressable onPress={() => setCurrent(current - 1)}>
          <MaterialIcons name="arrow-back-ios" size={20} color={"#101010"} />
        </Pressable>

        {current > 2 && (
          <>
            <PageButton number={1} setCurrent={setCurrent} />
            {current > 3 && (
              <Text style={tailwind("mr-1 text-sm tracking-widest")}>...</Text>
            )}
          </>
        )}

        <PageButton
          number={
            current === 1 ? 1 : current === total ? total - 2 : current - 1
          }
          current={current === 1}
          setCurrent={setCurrent}
        />
        <PageButton
          number={current === 1 ? 2 : current === total ? total - 1 : current}
          current={current !== 1 && current !== total}
          setCurrent={setCurrent}
        />
        <PageButton
          number={current === 1 ? 3 : current === total ? total : current + 1}
          current={current === total}
          setCurrent={setCurrent}
        />

        {current < total - 1 && (
          <>
            {current < total - 2 && (
              <Text style={tailwind("mr-1 text-sm tracking-widest")}>...</Text>
            )}
            <PageButton number={total} setCurrent={setCurrent} />
          </>
        )}

        <Pressable onPress={() => setCurrent(current + 1)}>
          <MaterialIcons name="arrow-forward-ios" size={20} color={"#101010"} />
        </Pressable>
      </View>
    </View>
  );
};

export default PagePicker;
