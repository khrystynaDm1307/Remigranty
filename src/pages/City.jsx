import { Box, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import { CityForm, ModalWindow } from "../components";
import { useTranslation } from "react-i18next";
import "./../translations/i18n";

export function City() {
  const md = useMediaQuery("(min-width:920px)");
  const sm = useMediaQuery("(min-width:500px)");

  const { t } = useTranslation();
  return (
    <Stack sx={{ mt: sm ? 8 : 4, mb: 11 }} alignItems="center">
      <Typography
        textAlign={"center"}
        sx={{
          fontSize: sm ? 49 : 42,
          fontFamily: "Montserrat",
          fontWeight: 600,
          color: (theme) => theme.palette.secondary.light,
        }}
      >
        {t("coming_soon")}
      </Typography>
      {!md && (
        <img
          src="images/city.svg"
          width={"75%"}
          alt=""
          style={{ margin: "32px 0", maxWidth: "380px" }}
        ></img>
      )}
      <Stack flexDirection={md ? "row" : "column-reverse"} alignItems="center">
        <Stack sx={{ width: "100%", maxWidth: "427px" }} alignItems="center">
          {md && (
            <img src="images/city.svg" width={250} height={340} alt=""></img>
          )}
          <CityForm />
          {!md && (
            <Link
              sx={{
                fontSize: 18,
                fontFamily: "Montserrat",
                fontWeight: 600,
                color: (theme) => theme.palette.secondary.light,
                mt: 10,
                textAlign: "center",
                lineHeight: "30px",
                maxWidth: 190,
              }}
            >
              {t("go_to_the_main_page")}
            </Link>
          )}
        </Stack>
        <Stack
          sx={{ width: "100%" }}
          spacing={4}
          alignItems={md ? "flex-start" : "center"}
        >
          <Stack
            width={{
              width: "100%",
              position: "relative",
              height: sm ? "107px" : "165px",
            }}
          >
            <Box
              sx={{
                width: sm ? "90%" : "106%",
                height: sm ? "130px" : "162px",
                border: "2px solid",
                borderRadius: sm ? "100px" : "70px",
                borderColor: (theme) => theme.palette.secondary.light,
                position: "absolute",
                top: 0,
                left: sm ? 30 : -3,
              }}
            ></Box>
            <Box
              sx={{
                width: sm ? "100%" : "106%",
                height: sm ? "94px" : "137px",
                border: "2px solid",
                borderRadius: sm ? "100px" : "60px",
                borderColor: (theme) => theme.palette.primary.light,
                position: "absolute",
                top: sm ? "19px" : "12px",
                left: sm ? 0 : -13,
              }}
            ></Box>
            <Typography
              sx={{
                position: "absolute",
                top: sm ? "30px" : "36px",
                left: sm ? "58px" : "12px",
                fontWeight: 600,
                fontSize: 16,
                width: sm ? "85%" : "95%",
              }}
            >
              {t("city_of_future_desc")}
            </Typography>
          </Stack>
          <Typography variant="p" sx={{ width: "100%", p: md ? "0 120px" : 0 }}>
            {t("city_of_future_desc_2")}
          </Typography>
          <Typography variant="p" sx={{ width: "100%", p: md ? "0 120px" : 0 }}>
            {t("city_of_future_desc_3")}
          </Typography>
          <img
            src="images/tuned.svg"
            alt=""
            width={206}
            height={100}
            style={{ marginLeft: md ? "120px" : 0 }}
          />

          {md && (
            <Link
              sx={{
                fontSize: 24,
                fontFamily: "Montserrat",
                fontWeight: 600,
                color: (theme) => theme.palette.secondary.light,
                pl: md ? "120px" : 0,
              }}
            >
              {t("go_to_the_main_page")}
            </Link>
          )}

          <ModalWindow />
        </Stack>
      </Stack>
    </Stack>
  );
}
