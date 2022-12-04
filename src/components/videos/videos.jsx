import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { VideoCard, ChannelCard, Loader } from "../";

const Videos = ({ videos }) => {
  if (!videos.length) return <Loader />;
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={2}
      alignItems={"center"}
      justifyContent={"flex-start"}
    >
      {videos.map((item) => (
        <Box
          sx={{
            width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
          }}
          key={item.id.videoId}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
