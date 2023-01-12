import { Stack, Typography, useMediaQuery } from "@mui/material";
import { subPages } from "./NavMenu";
import {Link} from 'react-router-dom';

export function SubMenu() {
  const md = useMediaQuery("(min-width:900px)");
  return (
    <Stack
      sx={{
        height: "120px",
        width: "650px",
        borderRadius: "0px 0px 30px 30px;",
        boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        mt: "-28px",
        display: md ? "flex" : "none",
      }}
    >
      <img
        src="images/submenu-logo.svg"
        alt=""
        style={{ width: "255px", height: "55px" }}
      />
      {subPages.map((page) => {
       return <Link to="#">{page.name}</Link>;
      })}
    </Stack>
  );
}
