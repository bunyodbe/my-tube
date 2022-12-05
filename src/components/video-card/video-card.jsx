import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { colors } from "../../constants/colors";
import moment from "moment";
import { Stack } from "@mui/system";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            width: "100%",
            height: "180px",
          }}
        />
      </Link>
      <CardContent
        sx={{
          background: colors.primary,
          height: "210px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video.snippet.title.slice(0, 50)}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              opacity: ".6",
              height: "40px",
              overflowY: "hidden",
              fontSize: "12px",
            }}
          >
            {video.snippet.description.slice(0, 70)}
          </Typography>
        </Link>
        <>
          <Stack
            direction={"row"}
            position={"absolute"}
            gap={"5px"}
            alignItems={"center"}
            bottom={"10px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color="gray">
              {video?.snippet?.channelTitle}
              <CheckCircle
                sx={{
                  fontSize: "12px",
                  color: "gray",
                  ml: "5px",
                }}
              />
            </Typography>
          </Stack>
        </>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
