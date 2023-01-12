import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Card } from "./Card";

const directors = [
  {
    name: "Микола Козак",
    job: "Генеральний директор",
    avatar: "images/Mykola.png",
    variant: 1,
    bio: "Співзасновник, співвласник і член правління IT-компанії Eliftech. Генеральний директор, співзасновник і співвласник IT-компанії CloverDynamics. Співвласник і консультант компанії AliksIT. Отримав диплом бакалавра «Розробка програмного забезпечення» від Університету «Львівська політехніка» та ступінь магістра Львівської бізнес-школи. Член правління YBC Львів. Має пристрасть до програмного забезпечення та розвитку бізнесу.",
  },
  {
    name: "Ірина Качмарчик",
    job: "Фінансовий директор",
    avatar: "images/Iryna.png",
    variant: 2,
    bio: "Засновниця та керівник компанії CeDePe в Україні та Professional Accounting Services в Україні і Польщі. Засновниця компанії ED Cosmetics. Членкиня Всеукраїнського Клубу Успішних Жінок. Учасниця Клубу Ділових Людей. Членкиня Young Business Club. Амбасадорка та членкиня ГО Міжнардноі Амбасади Жінок-підприємниць. Мама та успішна жінка, справжня бізнес-леді, яка впевнено долає всі перешкоди на шляху до успіху.",
  },
  {
    name: "Анна Азарісу",
    job: "Операційний директор",
    avatar: "images/Anna.png",
    variant: 3,
    bio: "Підприємець, виробник одягу, ентузіаст електронної комерції та консультант з маркетингу. Бакалавр ділового адміністрування та магістр наук з маркетингу. Консультант для окремих освітніх і технологічних стартапів, які покращують якість життя людей. Поліглот, який любить охоплювати іноземну культури, літературу та традиції. Анна вважає, що головною метою бізнесу є служіння громадам, створення добре оплачуваної роботи та безпечне громадське середовище.",
  },
];
export function Directors() {
  const md = useMediaQuery("(min-width:1200px)");
  const sm = useMediaQuery("(min-width:485px)");
  return (
    <Stack sx={{ mt: sm?"180px":"120px", mb: "37px" ,width:"100%"}} >
      <Typography variant="h2" textAlign={"center"} fontSize={!sm&&"34px"}>Рада директорів</Typography>
      <Stack flexDirection={"row"} justifyContent={md?"space-between":"space-around"} marginTop={6} flexWrap="wrap" className="directors">
        {directors.map((director) => (
          <Card {...director} />
        ))}
      </Stack>
    </Stack>
  );
}
