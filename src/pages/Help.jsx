import {
  Stack,
} from "@mui/material";
import { SubMenu } from "../components/SubMenu";

import {HelpHead} from '../components/HelpPage/Head/Head'
import {WhoWe} from "../components/HelpPage/WhoWe/who-we"
import {Progress} from "../components/HelpPage/Progress/Progress"
import {Thanks} from "../components/HelpPage/Thanks/Thanks"

import './Help.css';

export function Help() {

  return (
      <>
        <Stack
            alignItems={"center"}
            sx={{ width: "100%"}}
        >
          <SubMenu />
        </Stack>
        <div className="help-page">
            <HelpHead />
            <WhoWe />
            <Progress />
            <Thanks />
        </div>
      </>
  );
}
