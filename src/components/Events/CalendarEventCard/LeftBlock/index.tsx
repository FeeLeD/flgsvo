import React, { FC } from "react";
import dayjs from "dayjs";
import { dateHandler } from "../../dates";
import { NormalizedEvent_Venue } from "../../types";
import { Stack } from "@chakra-ui/react";
import CompetitionTypeTag from "./CompetitionTypeTag";
import InfoSection from "./InfoSection";
import { CalendarSvg, LocationSvg } from "~icons/index";

type Props = {
  competitionTypes: string[] | undefined;
  dates: {
    startDate: dayjs.Dayjs | undefined;
    endDate: dayjs.Dayjs | undefined;
  };
  venue: NormalizedEvent_Venue;
};

const LeftBlock: FC<Props> = ({
  competitionTypes = ["Событие"],
  dates: { startDate, endDate } = { startDate: dayjs(), endDate: undefined },
  venue,
}) => {
  const noLocation = !venue?.title && !venue?.description;

  return (
    <Stack p="24px" borderRight="1px solid rgb(0,0,0,0.2)" spacing="24px">
      <CompetitionTypeTag children={competitionTypes[0]} />

      <InfoSection
        icon={<CalendarSvg boxSize="20px" color="winter.85" />}
        title={dateHandler.getDateRange({ startDate, endDate })}
        description={dateHandler.getDaysRange({ startDate, endDate })}
      />

      {!noLocation && (
        <InfoSection
          icon={<LocationSvg boxSize="20px" color="winter.85" />}
          title={venue?.title}
          description={venue?.description}
        />
      )}
    </Stack>
  );
};

export default LeftBlock;
