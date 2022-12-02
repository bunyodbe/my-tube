import { Stack } from "@mui/system";
import { category } from "../../constants";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{ overflowX: "scroll", borderBottom: "1px solid rgb(114, 113, 113)" }}
    >
      {category.map((item) => (
        <button
          className="category-btn"
          key={item.name}
          style={{
            color: item.name === selectedCategory && "#fff",
            background: item.name === selectedCategory && colors.secondary,
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : colors.secondary,
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: 1 }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
