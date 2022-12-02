import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useState, useEffect } from "react";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../";
import { ApiService } from "../../service/api.service";

const Main = () => {
  /*--------------------------  States  --------------------------*/
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  /*--------------------------  States  --------------------------*/

  /*--------------------------  Handler  --------------------------*/
  const selectedCategoryHandler = (category) => setSelectedCategory(category);
  /*--------------------------  Handler  --------------------------*/

  /*--------------------------  useEffect  --------------------------*/
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
    // ApiService.fetching("search").then((data) => console.log(data));
  }, [selectedCategory]);
  /*--------------------------  useEffect  --------------------------*/

  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
