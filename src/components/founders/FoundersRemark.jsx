import { Box, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";

export function FoundersRemark() {
  const md = useMediaQuery("(min-width:1000px)");
  const sm = useMediaQuery("(min-width:735px)");
  return (
    <Stack
      width={{
        width: sm ? "56%" : "100%",
        position: sm ? "absolute" : "relative",
        height: md ? "137px" : sm ? "180px" : 200,
        bottom: sm ? 76 : 0,
      }}
    >
      <Box
        sx={{
          width: md ? "100%" : "100%",
          height: md ? 158 : sm ? 170 : 200,
          border: "2px solid",
          borderRadius: md ? "100px" : "60px",
          borderColor: (theme) => theme.palette.primary.light,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></Box>
      <Box
        sx={{
          width: "93%",

          height: md ? 158 : sm ? 170 : 200,
          border: "2px solid",
          borderRadius: md ? "100px" : "60px",
          borderColor: (theme) => theme.palette.info.main,
          position: "absolute",
          top: 20,
          left: 0,
        }}
      ></Box>
      <Typography
        sx={{
          position: "absolute",
          top: md ? "35px" : "37px",
          left: md ? "58px" : "22px",
          fontWeight: 600,
          fontSize: md ? 16 : 14,
          width: md ? "75%" : "78%",
        }}
      >
        Коли почалася війна,Світлана та Артур, у складі YBC Львова, вирішили
        об’єднати сили та присвятити свою організацію тому, щоб забезпечити
        українців всім необхідним для життя, а захисників України – усім
        необхідним для перемоги.
      </Typography>
    </Stack>
  );
}
