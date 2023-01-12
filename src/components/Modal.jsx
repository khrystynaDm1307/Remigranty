import * as React from "react";
import Modal from "@mui/material/Modal";
import { Stack, Typography, Button } from "@mui/material";

export function ModalWindow({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        sx={{
          position: "absolute",
          ml: "auto",
          mr: "auto",
          left: 0,
          right: 0,
          top: "23%",
          bgcolor: (theme) => theme.palette.secondary.main,
          borderRadius: "15px",
          width: "90%",
          maxWidth: 650,
          pt: 13,
          pb: 13,
        }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Stack sx={{ width: "300px" }} spacing={4} alignItems="center">
          <img src="images/done.svg" alt="" width={93} height={88} />
          <Typography fontWeight={600} textAlign="center" color={"#ffffff"}>
            Ми отримали Ваші контактні дані та скоро з вами сконтактуємось.
            Дякуємо за Вашу допомогу!
          </Typography>
          <Button onClick={() => setOpen(false)}>Повернутись назад</Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
