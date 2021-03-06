import React, { FC } from "react";
import { graphql } from "gatsby";
import { Heading, Stack } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { WPEvent } from "../components/Events/types";
import EventsList from "../components/Events/EventsList";
import Seo from "../components/seo";

type Events = {
  allWpEvent: {
    nodes: WPEvent[];
  };
};

const EventsPage: FC<{ data: Events }> = ({ data }) => {
  /* const events = [
    {
      id: "asdasd",
      title: "Title",
      // content: undefined,
      date: new Date(2021,9, 2).toString(),
      endDate: new Date(2021,9, 2).toString(),
      link: undefined,
      eventsCategories: {
        nodes: [],
      },
      tags: {
        nodes: [],
      },
      venue: {
        title: "Place title",
        address: "Place address",
        city: "Place city",
      },
    },
    {
      id: "asdasasdsadad",
      title: "Title Title",
      // content: undefined,
      date: new Date(2021, 9, 3).toString(),
      endDate: new Date(2021, 9, 3).toString(),
      link: undefined,
      eventsCategories: {
        nodes: [],
      },
      tags: {
        nodes: [],
      },
      venue: {
        title: "Place title",
        address: "Place address",
        city: "Place city",
      },
    },
    ...data.allWpEvent.nodes,
  ]; */

  return (
    <Layout>
      <Seo
        title="Календарь"
        description="Календарь соревнований сайта Федерации лыжных гонок Свердловской области"
      />

      <Stack spacing="24px">
        <Heading fontSize="h1">Календарь</Heading>

        <EventsList events={data.allWpEvent.nodes} />
      </Stack>
    </Layout>
  );
};

export default EventsPage;

export const query = graphql`
  query WpEvents {
    allWpEvent(sort: { fields: date, order: ASC }) {
      nodes {
        id
        title
        content
        date
        startDate
        endDate
        link
        eventsCategories {
          nodes {
            name
            wpParent {
              node {
                name
              }
            }
          }
        }
        tags {
          nodes {
            name
          }
        }
        venue {
          title
          address
          city
        }
      }
    }
  }
`;
