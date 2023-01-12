import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./../translations/i18n";

import './Main.css'

const projects = [
  {
    name: "МенторіЯ",
    logo: "mentoria.svg",
    description:
      "Проект, покликаний допомогти дітям, позбавленим можливості отримувати поради та знання від батьків, реалізуватись та досягти бажаних цілей в житті.",
  },
  {
    name: "Місто Майбутнього",
    logo: "city.svg",
    description:
      "Проект, покликаний покращувати місто Лева, розвивати благоустрій й інфраструктуру, а також робити його більш інклюзивним.",
  },
  {
    name: "Допомога Лікарням",
    logo: "help-hospital.svg",
    description:
      "Проект по забезпеченню лікарень всім необхідним медичним обладнанням для лікування поранених та порятунку життя.",
  },
];

export function Main() {
  const sm = useMediaQuery("(min-width:750px)");
  const md = useMediaQuery("(min-width:1100px)");
  const { t } = useTranslation();
  return (
    <Stack alignItems="center" sx={{ pb: sm ? "230px" : "120px" }}>
      <Stack
        sx={{ width: "100%", maxWidth: "1080px", mt: sm ? "122px" : "40px" }}
        alignItems="center"
      >
        <img
          style={{ width: "55%", maxWidth: "335px" }}
          alt=""
          src={"/images/logo.png"}
        />
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ pt: 3, pb: 4, ...(sm ? {} : { fontSize: "42px" }) }}
        >
          {t("remigrants")}
        </Typography>
        <Stack
          width={{
            width: "100%",
            maxWidth: "1080px",
            position: "relative",
            height: "100px",
          }}
        >
          <Box
            sx={{
              width: sm ? "95%" : "93%",

              height: "75px",
              border: "2px solid",
              borderRadius: "40px",
              borderColor: (theme) => theme.palette.primary.light,
              position: "absolute",
              top: sm ? 0 : "13px",
              left: sm ? 0 : 0,
            }}
          ></Box>
          <Box
            sx={{
              width: sm ? "85%" : "95%",

              height: "78px",
              border: "2px solid",
              borderRadius: "40px",
              borderColor: (theme) => theme.palette.secondary.light,
              position: "absolute",
              top: sm ? "22px" : 0,
              left: sm ? "14%" : "13px",
            }}
          ></Box>
          <Typography
            sx={{
              position: "absolute",
              top: sm ? "34px" : "24px",
              right: sm ? "35%" : "18%",
              fontWeight: 600,
              fontSize: 16,
              textAlign: sm ? "left" : "center",
              width: sm ? "auto" : "64%",
            }}
          >
            {t("fond_desc")}
          </Typography>
        </Stack>
        <Button sx={{ mt: 5 }}>{t("watch_our_projects")}</Button>
      </Stack>
      <Stack
        flexDirection={sm ? "row" : "column-reverse"}
        justifyContent={sm ? "space-between" : "center"}
        alignItems="center"
        sx={{ width: "100%", maxWidth: "1180px", mt: sm ? "200px" : "48px" }}
        className="bg-images"
      >
        <Stack
          sx={{ width: "100%", maxWidth: "640px" }}
          alignItems={!sm && "center"}
          style={{position: 'relative', zIndex: '1'}}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              ...(sm ? {} : { textAlign: "center", mt: 6, fontSize: "34px" }),
            }}
          >
            {t("our_goal")}
          </Typography>
          <Typography variant="p">{t("goal_part_1")}</Typography>
          <Typography variant="p" sx={{ mt: 4, mb: 6 }}>
            {t("goal_part_2")}
          </Typography>
          <Button color="info" sx={{ width: "158px" }}>
            {t("help")}
          </Button>
        </Stack>
        <img
          src="/images/flower.svg"
          alt=""
          style={{ maxWidth: "433px", width: "80%" }}
        />
      </Stack>
      <Stack
          className="bg-circle-1"
          sx={{ width: "100%", maxWidth: "1180px", mt: "200px" }} jc>
        <Typography
          variant="h2"
          textAlign={"center"}
          sx={{ mb: 7, ...(sm ? {} : { fontSize: "34px" }) }}
        >
          {t("our_projects")}
        </Typography>
        <Stack
          flexDirection={"row"}
          flexWrap="wrap"
          justifyContent={md ? "space-between" : "center"}
          style={{position: "relative", zIndex: "1"}}
        >
          <Stack sx={{ width: "100%", maxWidth: "350px" }}>
            <Stack
              sx={{ height: 290, pb: 10, boxSizing: "border-box" }}
              justifyContent="end"
              alignItems={"center"}
            >
              {" "}
              <img src="/images/mentoria.svg" alt="" width={280} height={183} />
            </Stack>

            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontFamily: "Montserrat",
                color: (theme) => theme.palette.secondary.main,
                ...(sm ? {} : { fontSize: "24px" }),
              }}
              textAlign="center"
            >
              {t("mentoria")}
            </Typography>
            <Typography variant="p" textAlign="center">
              {t("mentoria_desc")}
            </Typography>
            {!sm && (
              <Button sx={{ mt: 3, mb: 12, fontSize: "14px" }}>
                {t("go_to_the_project_page")}
              </Button>
            )}
          </Stack>
          <Stack sx={{ width: "100%", maxWidth: "350px" }}>
            <Stack
              sx={{ height: 290, pb: 7, boxSizing: "border-box" }}
              justifyContent="end"
              alignItems={"center"}
            >
              {" "}
              <img src="/images/city.svg" alt="" width={170} height={230} />
            </Stack>

            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontFamily: "Montserrat",
                color: (theme) => theme.palette.secondary.main,
                ...(sm ? {} : { fontSize: "24px" }),
              }}
              textAlign="center"
            >
              {t("city_of_future")}
            </Typography>
            <Typography variant="p" textAlign="center">
              {t("city_of_future_desc")}
            </Typography>
            {!sm && (
              <Button sx={{ mt: 3, mb: 12, fontSize: "14px" }}>
                {t("go_to_the_project_page")}
              </Button>
            )}
          </Stack>
          <Stack sx={{ width: "100%", maxWidth: "350px" }}>
            {sm ? (
              <Stack
                sx={{ height: 290, pb: 10, boxSizing: "border-box" }}
                justifyContent="end"
                alignItems={"center"}
              >
                {" "}
                <img
                  src="/images/help-hospital.svg"
                  alt=""
                  width={290}
                  height={80}
                />
              </Stack>
            ) : (
              <img
                src="/images/help-hospital.svg"
                alt=""
                width={273}
                height={80}
                style={{ marginBottom: "80px" }}
              />
            )}

            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontFamily: "Montserrat",
                color: (theme) => theme.palette.secondary.main,
                ...(sm ? {} : { fontSize: "24px" }),
              }}
              textAlign="center"
            >
              {t("help_hospitals")}
            </Typography>
            <Typography variant="p" textAlign="center">
              {t("help_hospitals_desc")}
            </Typography>
            {!sm && (
              <Button sx={{ mt: 3, mb: 12, fontSize: "14px" }}>
                {t("go_to_the_project_page")}
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
