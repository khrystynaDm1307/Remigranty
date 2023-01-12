import {
  Button,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  LinearProgress,
} from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import { SubMenu } from "../components/SubMenu";
import styled from "@emotion/styled";
import theme from "../theme";
import { useTranslation } from "react-i18next";
import "./../translations/i18n";

import projectImg1 from './images/projects-1.png'
import projectImg2 from './images/projects-2.png'
import projectImg3 from './images/projects-3.png'
import projectImg4 from './images/projects-4.png'
import projectImg5 from './images/projects-5.png'
import projectImg6 from './images/projects-6.png'

import line1Img from './images/line-1.svg'
import line2Img from './images/line-2.svg'
import line3Img from './images/line-3.svg'

import projectMobileImg1 from './images/mobile-1.png'
import projectMobileImg2 from './images/mobile-2.png'

import './works.css';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#0A17B7",
  },
}));

const BUDGET = {
  RAISED: "8 000$",
  GOAL: "50 000$",
};

export function Work() {
  const md = useMediaQuery("(min-width:900px)");
  const { t } = useTranslation();
  return (
    <Stack alignItems={"center"}>
      <SubMenu />
      <Stack sx={{ mt: "120px", mb: "160px" }}>
        <Typography variant="h1" sx={{ textAlign: "center", mb: 10 }}>
          {t("our_work")}
        </Typography>
        <Stack
          sx={{
            alignItems: "center",
            flexDirection: md ? "row" : "column-reverse",
          }}
        >
          <Stack spacing={5} minWidth={md ? 400 : 200} maxWidth={860}>
            <Typography variant="p">{t("remigranty_desc_1")}</Typography>
            <Typography variant="p">{t("remigranty_desc_2")}</Typography>
            <Typography variant="p" fontWeight={600}>
              {t("remigranty_desc_3")}
            </Typography>
          </Stack>
          <img
            src="images/remi_logo.png"
            alt=""
            style={{
              width: "90%",
              maxWidth: "416px",
              marginLeft: md ? "30px" : 0,
              marginBottom: md ? 0 : "40px",
            }}
          />
        </Stack>
      </Stack>
      <Stack sx={{ mb: "160px", width: "100%" }}>
        <Typography variant="h1" sx={{ textAlign: "center", mb: 10 }}>
          {t("actual_project")}
        </Typography>
        <Stack
          sx={{ alignItems: "center", flexDirection: md ? "row" : "column" }}
        >
          <img
            src="images/wound.png"
            alt=""
            style={{
              width: md ? "50%" : "100%",
              maxWidth: "710px",
              marginRight: md ? "30px" : 0,
              marginBottom: md ? 0 : "40px",
            }}
          />
          <Stack width={md ? "50%" : "100%"}>
            <Typography
              variant="h2"
              fontSize={31}
              textAlign={md ? "left" : "center"}
            >
              {t("actual_project_name")}
            </Typography>
            <Typography variant="p" sx={{ m: "40px 0" }}>
              {t("actual_project_desc")}
            </Typography>
            <BorderLinearProgress variant="determinate" value={16} />
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Typography variant="p" fontWeight={600}>
                {t("raised")}: {BUDGET.RAISED}
              </Typography>
              <Typography variant="p" fontWeight={600}>
                {t("goal")}: {BUDGET.GOAL}
              </Typography>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                mt: 5,
                justifyContent: md ? "flex-start" : "center",
              }}
            >
              <Button color="info" sx={{ mr: 5 }}>
                {t("help")}
              </Button>
              <Link
                href=""
                sx={{
                  fontWeight: 600,
                  color: (theme) => theme.palette.secondary.light,
                }}
              >
                {t("learn_more")}
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
        <div className="projects">
            <div className="container">
                <h2 className="projects__title">Виконані проекти</h2>
                <div className="projects__wrap">
                    <div className="projects__item projects__item-1">
                        <div className="projects__img projects__img--mob projects__img-fw">
                            <img src={projectImg1} alt=""/>
                            <img src={projectMobileImg2} className="mobile" alt=""/>
                        </div>
                        <div className="projects__info">
                            З вашою допомогою ми доставляли продукти харчування та напої в ті регіони, що найбільше цього потребували: Харківську, Херсонську, Київську, та Чернігівську області.
                            <div className="projects__num">1</div>
                        </div>
                        <img src={line1Img} className="projects__line" alt=""/>
                    </div>
                    <div className="projects__item projects__item-2">
                        <div className="projects__img">
                            <img src={projectImg2} alt=""/>
                        </div>
                        <div className="projects__info">
                            З вашою допомогою ми годували вимушено переміщених осіб зі Сходу України гарячою, поживною їжею.
                            <div className="projects__num">2</div>
                        </div>
                        <img src={line2Img} className="projects__line" alt=""/>
                    </div>
                    <div className="projects__item projects__item-3">
                        <div className="projects__img projects__img--mob projects__img-fw">
                            <img src={projectImg3} alt=""/>
                            <img src={projectMobileImg1} className="mobile" alt=""/>
                        </div>
                        <div className="projects__info">
                            З вашою допомогою ми придбали автомобіль для швидкого пересування людей і вантажів на передовій.
                            <div className="projects__num">3</div>
                        </div>
                        <img src={projectImg4} className="project__img-1" alt=""/>
                        <img src={line3Img} className="projects__line" alt=""/>
                    </div>
                    <div className="projects__item projects__item-4">
                        <div className="projects__img">
                            <img src={projectImg5} alt=""/>
                        </div>
                        <div className="projects__info">
                            З вашою допомогою ми доставили понад 10 тис. консервів воїнам і жителям Києва та області.
                            <div className="projects__num">4</div>
                        </div>
                    </div>
                    <div className="projects__item projects__item-5">
                        <div className="projects__img">
                            <img src={projectImg6} alt=""/>
                        </div>
                        <div className="projects__info">
                            З вашою допомогою ми доставили сухпайки людям у міста, що найбільше постраждали від агресора.
                            <div className="projects__num">5</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Stack
        sx={{
          m: "160px 0",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Stack maxWidth={480}>
          <Typography variant="h2">{t("our_process")}</Typography>
          <Typography variant="p" sx={{ m: "40px 0" }}>
            {t("our_process_desc")}
          </Typography>
          <Typography variant="p" fontWeight={600} mb={2}>
            {t("we_gurantee")}:
          </Typography>
          <Stack spacing={1}>
            {[1, 2, 3, 4].map((index) => (
              <Stack flexDirection={"row"}>
                <img
                  src="images/info-done.svg"
                  alt=""
                  width={24}
                  style={{ width: 24, marginRight: "24px" }}
                />{" "}
                <Typography variant="p">{t(`gurantee_${index}`)}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack spacing={3}>
          {[1, 2, 3].map((step, index) => (
            <Stack
              sx={{
                p: 2,
                flexDirection: "row",
                maxWidth: "530px",
                border: "1px solid",
                borderColor: theme.palette.primary.main,
                borderRadius: "40px",
                boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)",
                alignItems: "center",
              }}
              className="stacks"
            >
              <img src={`images/step${index}.svg`} alt="" width={80} />
              <Stack sx={{ ml: 3 }}>
                <Typography variant="p" fontWeight={600} mb={1}>
                  {t("Крок")} {index + 1}
                </Typography>
                <Typography variant="p">{t(`step_${step}`)}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
