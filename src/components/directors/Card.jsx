import { Stack, Typography, useMediaQuery } from "@mui/material";

export function Card({ variant, name, job, bio, avatar, index }) {
  const md = useMediaQuery("(min-width:1200px)");
  const sm = useMediaQuery("(min-width:485px)");
  return (
    <Stack
      sx={{
        maxWidth: sm ? 370 : 500,
        width: "100%",
        alignItems: "center",
        marginTop: md ? 0 : 8,
        "&:first-child": {
          mt: md ? 0 : 8,
        },
      }}
    >
      {sm ? (
        <Stack
          sx={{
            height: 400,
            width: "100%",
            position: "relative",
          }}
        >
          <img src={avatar} alt="" width={368} style={{ zIndex: 1 }} />
          <Stack
            sx={{
              border: "1px solid",
              position: "absolute",
              borderRadius: "50%",
              zIndex: 0,
              ...getVariantStyles(variant),
              mb:2
            }}
          ></Stack>
        </Stack>
      ) : (
        <img src={avatar} alt="" width={"90%"} style={{ marginBottom: 16 }} />
      )}

      <Typography variant="h3" fontSize={!sm && "24px"}>
        {name}
      </Typography>
      <Typography
        sx={{
          m: "8px 0 16px",
          fontWeight: 600,
          fontSize: sm ? "16px" : "14px",
        }}
      >
        {job}
      </Typography>
      <Typography fontSize={sm ? 16 : 14} lineHeight={sm ? "30px" : "22px"}>
        {bio}
      </Typography>
    </Stack>
  );
}

const getVariantStyles = (variant) => {
  switch (variant) {
    case 1:
      return {
        left: -37,
        top: -27,
        width: 375,
        height: 375,
        borderColor: (theme) => theme.palette.primary.main,
      };
    case 2:
      return {
        left: -37,
        top: -13,
        width: 405,
        height: 405,
        borderColor: (theme) => theme.palette.primary.main,
      };
    default:
      return {
        right: -14,
        top: -21,
        width: 375,
        height: 375,
        borderColor: (theme) => theme.palette.secondary.light,
      };
  }
};
