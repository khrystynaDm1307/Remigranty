import { Stack } from "@mui/system";
import { Footer, NavMenu } from "../components";
import { useLocation } from 'react-router-dom'

export function PublicLayout({ children }) {
    const location = useLocation();
  return (
    <>
      <NavMenu />
      <main>
          {(location.pathname !== '/help') &&
              (location.pathname !== '/about') &&
                <Stack sx={{ width: "100%",p:2 }} alignItems="center">
                  {" "}
                  <Stack sx={{ width: "100%", maxWidth: "1280px" }}>{children}</Stack>
                </Stack>
          }
          {(location.pathname === '/help') &&
              children
          }
          {(location.pathname === '/about') &&
              children
          }

      </main>
      <Footer />
    </>
  );
}
