import { Link, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";

import circleIcon from './circle-2.svg'

const documents = [
  { name: "Банківські реквізити", link: "documents/Accounts.pdf" },
  { name: "Установчі документи", link: "documents/Founding documents.pdf" }
];
const imgFolder = "images";
const socialIcons = [
  {
    name: "facebook.svg",
    link: "https://www.facebook.com/remigranty"
  },
  {
    name: "insta.svg",
    link: "https://www.instagram.com/remigranty_foundation/"
  },
  {
    name: "telegram.svg",
    link: "https://t.me/svetagliebova"
  },
  {
    name: "whatsapp.svg",
    link: "https://api.whatsapp.com/send?phone=+380676663681"
  }
];

export function Footer() {
  const sm = useMediaQuery("(min-width:800px)");
  return (
    <Stack
      sx={{
        width: "100%",
        height: sm ? "92px" : "auto",
        backgroundColor: (theme) => theme.palette.secondary.main,
        p: sm ? "0 70px" : "36px",
        mb: "-20px",
      }}
      justifyContent="space-between"
      flexDirection={sm ? "row" : "column-reverse"}
      alignItems="center"
      className="footer"
    >
      {(window.location.pathname === '/') &&
          <img src={circleIcon} className="circle-icon-2" alt=""/>
      }
      <Stack
        flexDirection={sm ? "row" : "column"}
        spacing={sm ? 0 : 1}
        mt={sm ? 0 : 5}
        justifyContent="center"
      >
        {documents.map((document) => (
          <Link
            sx={{
              color: "#ffffff",
              fontSize: 16,
              mr: sm ? 8 : 0,
              textDecoration: "none",
              fontWeight: 400,
            }}
            href={document.link}
            download
          >
            {document.name}
          </Link>
        ))}
      </Stack>
      <Stack flexDirection={"row"}>
        {socialIcons.map((icon, index) => (
          <Link href={icon.link} target="_blank">
            <img
              src={`${imgFolder}/${icon.name}`}
              alt=""
              width={32}
              height={32}
              style={{
                marginRight: index === socialIcons.length - 1 ? 0 : "24px"
              }}
            />
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
