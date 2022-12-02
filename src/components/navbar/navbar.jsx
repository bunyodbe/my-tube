import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../constants";
import { SearchBar } from "../index";
import { colors } from "../../constants/colors";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to="/">
        <div style={{ height: 30, fontSize: 28, color: `${colors.secondary}` }}>
          {logo}
        </div>
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
