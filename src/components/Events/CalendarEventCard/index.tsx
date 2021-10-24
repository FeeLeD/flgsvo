import React, { FC, useMemo } from "react";
import dayjs from "dayjs";
import { normalizeEvent } from "./utils";
import { NormalizedEvent, WPEvent } from "../types";
import { Grid } from "@chakra-ui/react";
import LeftBlock from "./LeftBlock";
import MainBlock from "./MainBlock";

type Props = {
  event: WPEvent;
};

const CalendarEventCard: FC<Props> = ({ event }) => {
  const normalizedEvent: NormalizedEvent = useMemo(() => {
    return {
      id: event.id,
      title: event.title ?? "Событие",
      content: normalizeEvent.content(event.content),
      startDate: dayjs(event.startDate),
      endDate: dayjs(event.endDate),
      link: event.link,
      competitionTypes: normalizeEvent.tags(event.tags),
      venue: normalizeEvent.venue(event.venue),
      disciplines: normalizeEvent.eventCategories(event.eventsCategories),
      links: normalizeEvent.getLinksFromContent(event.content),
    };
  }, [event]);

  return (
    <Grid
      gridTemplateColumns={["1fr", "1fr", "250px auto"]}
      gridTemplateAreas={`"a" "b"`}
      bg="white"
      borderRadius="8px"
    >
      <LeftBlock
        gridArea={["b", "b", "a"]}
        competitionTypes={normalizedEvent.competitionTypes}
        dates={{
          startDate: dayjs(normalizedEvent.startDate),
          endDate: dayjs(normalizedEvent.endDate),
        }}
        venue={normalizedEvent.venue}
      />

      <MainBlock
        gridArea={["a", "a", "b"]}
        title={normalizedEvent.title}
        disciplines={normalizedEvent.disciplines}
        content={normalizedEvent.content}
        links={normalizedEvent.links}
      />
    </Grid>
  );
};

export default CalendarEventCard;
