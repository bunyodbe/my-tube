import { CircularProgress } from "@mui/material";
import { Box, Stack } from "@mui/system";

const Loader = () => {
  return (
    <Box minHeight={"90vh"}>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"80vh"}
      >
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default Loader;
