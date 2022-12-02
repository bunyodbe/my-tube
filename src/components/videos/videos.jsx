import { Stack } from "@mui/system";
import VideoCard from "../video-card/video-card";

const Videos = ({ videos }) => {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={2}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      {videos.map((item) => (
        <VideoCard key={item.id.videoId} video={item} />
      ))}
    </Stack>
  );
};

export default Videos;
