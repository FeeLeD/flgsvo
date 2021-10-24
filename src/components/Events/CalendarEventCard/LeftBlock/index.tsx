import React, { FC } from "react";
import dayjs from "dayjs";
import { dateHandler } from "../../dates";
import { NormalizedEvent_Venue } from "../../types";
import { Stack, StackProps } from "@chakra-ui/react";
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
} & StackProps;

const LeftBlock: FC<Props> = ({
  competitionTypes = ["Событие"],
  dates: { startDate, endDate } = { startDate: dayjs(), endDate: undefined },
  venue,
  ...stackProps
}) => {
  const noLocation = !venue?.title && !venue?.description;

  return (
    <Stack
      p={["0 24px 24px", "0 24px 24px", "24px"]}
      borderRight={["none", "none", "1px solid rgb(0,0,0,0.2)"]}
      spacing="32px"
      {...stackProps}
    >
      <CompetitionTypeTag
        display={["none", "none", "initial"]}
        children={competitionTypes[0]}
      />

      <Stack spacing="24px">
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
    </Stack>
  );
};

export default LeftBlock;
