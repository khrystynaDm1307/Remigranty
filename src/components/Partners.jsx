import { Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./../translations/i18n";

export function Partners() {
  const sm = useMediaQuery("(min-width:700px)");
  const { t } = useTranslation();
  return (
    <Stack sx={{ mb: sm?"180px":"120px", width: "100%" }}>
      <Typography variant="h2" textAlign={"center"} mb={8}>
        {t("our_partners")}
      </Typography>

      <Stack
        flexDirection={sm ? "row" : "column"}
        flexWrap="wrap"
        alignItems={"center"}
        justifyContent={sm ? "space-around" : "space-between"}
      >
        <img
          src="images/partner3.png"
          alt=""
          width={sm ? 272 : 240}
          height={124}
          style={{ marginBottom: sm ? 0 : "40px" }}
        />
        <img
          src="images/partner2.png"
          alt=""
          width={sm ? 322 : 240}
          height={sm ? 100 : 75}
          style={{ marginBottom: sm ? 0 : "40px" }}
        />

        <img
          src="images/partner4.png"
          alt=""
          width={sm ? 196 : 150}
          height={sm ? 174 : 133}
          style={{ marginBottom: sm ? 0 : "40px" }}
        />
        <img
          src="images/partner5.png"
          alt=""
          width={sm ? 335 : 240}
          height={sm ? 82 : 60}
        />
      </Stack>
    </Stack>
  );
}
