import React, { FC, useState } from "react";
import dayjs from "dayjs";
import { WPEvent } from "./types";
import { Stack, Button, Text, Box, Input, HStack } from "@chakra-ui/react";
import CalendarEventCard from "./CalendarEventCard";
import { SkierSvg } from "~icons/SkierSvg";

type Props = {
  events: WPEvent[];
};

const EventsList: FC<Props> = ({ events = [] }) => {
  const [input, setInput] = useState("");
  const [showAll, setShowAll] = useState(false);

  const pastEventsExist = events.some(event =>
    dayjs(event.date).isBefore(dayjs().add(-1, "day"))
  );

  const showSearchedFilter = (event: WPEvent) => {
    return event.title?.toLowerCase().includes(input.toLowerCase());
  };

  const removePastEventsFilter = (event: WPEvent) => {
    return (
      dayjs(event.date).isAfter(dayjs().add(-1, "day")) &&
      showSearchedFilter(event)
    );
  };

  return (
    <Stack spacing="48px">
      <HStack bg="white" p="24px" borderRadius="8px">
        <Box w="100%">
          <Text opacity="0.8">Поиск событий по названию</Text>
          <Input
            value={input}
            onChange={e => setInput(e.currentTarget.value)}
          />
        </Box>
      </HStack>

      {pastEventsExist && (
        <Button
          h="fit-content"
          p="0"
          bg="none"
          color="winter.85"
          fontSize="14px"
          _hover={{ opacity: 0.6 }}
          _active={{ opacity: 0.8 }}
          onClick={() => setShowAll(!showAll)}
          children={
            showAll ? "Скрыть прошедшие события" : "Показать прошедшие события"
          }
        />
      )}

      <Stack spacing="24px">
        {events
          .filter(showAll ? showSearchedFilter : removePastEventsFilter)
          .map(event => (
            <CalendarEventCard key={event.id} event={event} />
          ))}

        {events.filter(showAll ? showSearchedFilter : removePastEventsFilter)
          .length === 0 && (
          <Stack h="200px" align="center" justify="center" spacing="20px">
            <SkierSvg boxSize="72px" />
            <Text>
              Событий по запросу <b>"{input}"</b> не найдено
            </Text>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default EventsList;
