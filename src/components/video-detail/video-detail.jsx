import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import ReactPlayer from "react-player";
import { Chip, Stack, Typography } from "@mui/material";
import {
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"}>
        <Box width={"75%"}>
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
          <Typography variant="h5" fontWeight={"bold"} p={2}>
            {videoDetail.snippet.title}
          </Typography>
          {videoDetail &&
            videoDetail.snippet.tags.map((item, index) => (
              <Chip
                label={item}
                key={index}
                sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
                deleteIcon={<Tag />}
                onDelete={() => {}}
                variant="outline"
              />
            ))}

          <Typography variant="subtitle2" sx={{ opacity: "0.7" }} p={2}>
            {videoDetail.snippet.description}
          </Typography>
          <Stack direction="row" gap="20px" alignItems="center" py={1} px={2}>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <Visibility />
              {parseInt(videoDetail.statistics.viewCount).toLocaleString()}{" "}
              views
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <FavoriteOutlined />
              {parseInt(videoDetail.statistics.likeCount).toLocaleString()}{" "}
              likes
            </Stack>
            <Stack
              sx={{ opacity: 0.7 }}
              direction="row"
              alignItems="center"
              gap="3px"
            >
              <MarkChatRead />
              {parseInt(
                videoDetail.statistics.commentCount
              ).toLocaleString()}{" "}
              comment
            </Stack>
          </Stack>
        </Box>
        <Box width={"25%"}>Suggested videos</Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
