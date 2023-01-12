import { Stack, Typography, useMediaQuery } from "@mui/material";
import { FoundersRemark } from "./FoundersRemark";

export function Founders() {
  const md = useMediaQuery("(min-width:1250px)");
  const sm = useMediaQuery("(min-width:1100px)");
  const xs = useMediaQuery("(min-width:735px)");
  return (
    <>
      {xs ? (
        <Stack
          sx={{ mt: "216px", width: "100%", minHeight: "655px" }}
          position="relative"
        >
          <Stack flexDirection={"row"} position="relative">
            <Stack
              position={"relative"}
              sx={{
                ...(sm && { width: "40%" }),
                minWidth: "280px",
                maxWidth: "420px",
              }}
            >
              <Stack
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: (theme) => theme.palette.info.main,
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                }}
              ></Stack>
              <img
                src="images/Artur.png"
                alt=""
                style={{ width: sm ? 416 : "100%", height: sm ? 416 : "auto" }}
              />
            </Stack>
            <Stack sx={{ ml: 3 }}>
              <Typography variant="h2">Наші засновники</Typography>
              <Typography variant="p" sx={{ maxWidth: "640px", mb: 4, mt: 10 }}>
                Артур Свешніков родом із Чорноморська Одеської області а
                Світлана Глєбова зі Львова. Останні 13 років вони прожили в
                Сполучених Штатах Америки і побудували одну з найуспішніших
                танцювальних студій в країні, що працює в центрі Манхеттена.
              </Typography>
              <Typography variant="p" sx={{ maxWidth: md ? "370px" : "490px" }}>
                Вони повернулися в Україну в жовтні 2021 року з наміром
                відкривати соціально відповідальний бізнес, інвестувати в
                українську економіку та створити власну благодійну організацію
                для допомоги людям України.
              </Typography>
            </Stack>
            <Stack
              sx={{
                position: "absolute",
                right: 0,
                bottom: md ? -212 : -345,
                width: sm ? "auto" : "37%",
                minWidth: "280px",
                maxWidth: "420px",
              }}
            >
              <img
                src="images/Svitlana.png"
                alt=""
                style={{ width: sm ? 416 : "100%", height: sm ? 416 : "auto" }}
              />
              <Stack
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  position: "absolute",
                  top: "55px",
                  left: "20px",
                }}
              ></Stack>
              <Stack
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: (theme) => theme.palette.secondary.light,
                  position: "absolute",
                  top: "29px",
                  left: "39px",
                }}
              ></Stack>
            </Stack>
          </Stack>

          <FoundersRemark />
        </Stack>
      ) : (
        <Stack sx={{ width: "100%" }} alignItems="center">
          <Typography variant="h2" fontSize={34} textAlign="center">
            Наші засновники
          </Typography>
          <img
            src="images/Artur.png"
            alt=""
            style={{ width: "100%", marginTop: 64, maxWidth: "420px" }}
          />
          <Typography variant="p" sx={{ mb: 4, mt: 5 }}>
            Артур Свешніков родом із Чорноморська Одеської області а Світлана
            Глєбова зі Львова. Останні 13 років вони прожили в Сполучених Штатах
            Америки і побудували одну з найуспішніших танцювальних студій в
            країні, що працює в центрі Манхеттена.
          </Typography>
          <Typography variant="p">
            Вони повернулися в Україну в жовтні 2021 року з наміром відкривати
            соціально відповідальний бізнес, інвестувати в українську економіку
            та створити власну благодійну організацію для допомоги людям
            України.
          </Typography>
          <img
            src="images/Svitlana.png"
            alt=""
            style={{
              width: "100%",
              marginTop: 40,
              marginBottom: 40,
              maxWidth: "420px",
            }}
          />
          <FoundersRemark />
        </Stack>
      )}
    </>
  );
}
