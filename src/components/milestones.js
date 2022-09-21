import { Box, Link, Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { VscMilestone } from "react-icons/vsc";

function Milestones({ milestones }) {
  return (
    <Box>
      <Timeline position="alternate">
        {milestones.map((milestone, index) => (
          <TimelineItem
            key={`${milestone.title}-index`}
            sx={{
              "& .MuiTimelineOppositeContent-root": {
                display: { xs: "none", sm: "block" },
              },
            }}
          >
            <TimelineOppositeContent>
              {milestone.image && (
                <Box
                  component="img"
                  src={milestone.image}
                  sx={{
                    mb: 5,
                    width: 300,
                    height: 270,
                    borderRadius: 1,
                    display: { xs: "none" },
                    boxShadow: (theme) => theme.shadows[1],
                  }}
                />
              )}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  ...(index % 2 !== 0 && {
                    transform: "scaleX(-1)",
                  }),
                }}
              >
                <VscMilestone />
              </TimelineDot>
              <TimelineConnector sx={{ mb: 5 }} />
            </TimelineSeparator>
            <TimelineContent sx={{ pb: 5 }}>
              <Box px={1}>
                <Typography fontWeight="bold">{milestone.date}</Typography>
                <Typography>{milestone.description}</Typography>
                <Link href={milestone.url}>Learn more</Link>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default Milestones;
