import { Box, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./../translations/i18n";
import { MentorForm } from "../components";

export function Mentoria() {
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
          src="images/mentoria.svg"
          width={"75%"}
          alt=""
          style={{ margin: "32px 0" }}
        ></img>
      )}
      <Stack flexDirection={md ? "row" : "column"} alignItems="center">
        <Stack
          sx={{ width: "100%" }}
          spacing={4}
          alignItems={md ? "flex-start" : "center"}
        >
          <Stack
            width={{
              width: "100%",
              position: "relative",
              height: sm ? "137px" : "180px",
            }}
          >
            <Box
              sx={{
                width: sm ? "90%" : "100%",
                height: sm ? 118 : 165,
                border: "2px solid",
                borderRadius: sm ? "100px" : "60px",
                borderColor: (theme) => theme.palette.primary.light,
                position: "absolute",
                top: 0,
                left: sm ? 21 : -13,
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",

                height: sm ? 123 : 170,
                border: "2px solid",
                borderRadius: sm ? "100px" : "60px",
                borderColor: (theme) => theme.palette.secondary.light,
                position: "absolute",
                top: sm ? 14 : 9,
                left: sm ? 0 : -5,
              }}
            ></Box>
            <Typography
              sx={{
                position: "absolute",
                top: sm ? "30px" : "37px",
                left: sm ? "58px" : "22px",
                fontWeight: 600,
                fontSize: sm ? 16 : 14,
                width: sm ? "75%" : "78%",
              }}
            >
              {t("mentoria_name_desc")}
            </Typography>
          </Stack>
          <Typography
            variant="p"
            sx={{ width: "100%", padding: md ? "0 100px" : 0 }}
            className="mentoria__circle-1"
          >
            {t("mentoria_full_desc_1")}
          </Typography>
          <Typography
            variant="p"
            sx={{ width: "100%", padding: md ? "0 100px" : 0 }}
            className="mentoria__circle-2"
          >
            {t("mentoria_full_desc_2")}

          </Typography>
          {md && (
            <Link
              sx={{
                fontSize: 24,
                fontFamily: "Montserrat",
                fontWeight: 600,
                color: (theme) => theme.palette.secondary.light,
                pl: md ? "130px" : "100px",
              }}
            >
              {t("go_to_the_main_page")}
            </Link>
          )}
        </Stack>
        <Stack sx={{ width: "100%", maxWidth: "427px" }} alignItems="center">
          {md && (
            <img
              src="images/mentoria.svg"
              width={427}
              height={290}
              alt=""
            ></img>
          )}
          <MentorForm />
        </Stack>
        {!md && (
          <Link
            sx={{
              fontSize: 18,
              fontFamily: "Montserrat",
              fontWeight: 600,
              color: (theme) => theme.palette.secondary.light,
              mt: 12,
              textAlign: "center",
              lineHeight: "30px",
              maxWidth: 190,
            }}
          >
            {t("go_to_the_main_page")}
          </Link>
        )}
      </Stack>
    </Stack>
  );
}
