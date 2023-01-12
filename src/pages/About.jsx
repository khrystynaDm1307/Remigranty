import { Stack } from "@mui/system";
import {
  AboutProject,
  Directors,
  Founders,
  Partners,
  SubMenu,
  Volonteers,
} from "../components";

export function About() {
  return (
    <Stack alignItems={"center"}>
      <SubMenu />
      <AboutProject />
        <div style={{maxWidth: '1300px', margin: '0 auto', width: '100%', padding: '0 15px'}}>
            <Founders />
            <Directors />
            <Volonteers />
            <Partners />
        </div>
    </Stack>
  );
}
