import { Button, Stack, TextField, Typography } from "@mui/material";
import Joi from "joi";
import { useRef, useState } from "react";
import emailjs from "../services/email";
import { name, phone } from "../utills/validation/helpers";
import { ContactFormSchema } from "../utills/validation/schemas";
import { ModalWindow } from "./Modal";

// const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } =
//   process.env;
//   console.log(process.env)

const EMAILJS_SERVICE_ID = "service_06lerdb";
const EMAILJS_TEMPLATE_ID = "template_ph0wit6";
const EMAILJS_USER_ID = "VVH6gHX1lYaHJ2jC1";

const initialValues = {
  name: "",
  phone: "",
};

export function MentorForm() {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // NEED TO USE FORMIK
  const [formData, setFormDate] = useState(initialValues);
  const [error, setError] = useState(initialValues);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!isValid()) return;
    setLoading(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_USER_ID
      );

      setOpen(true);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
    e.target.reset();
  };

  const handleChange = (e) => {
    setError(initialValues)
    setFormDate({ ...formData, [e.target.name]: e.target.value });
  };

  const isValid = () => {
    setError(initialValues);

    const nameValid = name.validate(formData.name);
    const phoneValid = phone.validate(formData.phone);

    const nameErr = nameValid?.error?.message;
    const phoneErr = phoneValid?.error?.message;

    setError({
      name: nameErr || "",
      phone: phoneErr || "",
    });

    if (nameErr || phoneErr) return false;
    return true;
  };

  return (
    <Stack
      ref={form}
      onSubmit={sendEmail}
      component="form"
      autoComplete="off"
      spacing={2}
      sx={{ width: "100%", maxWidth: "340px", mt: 8 }}
    >
      <Typography>
        Бажаєш стати ментором та допомогти дітям? Заповнюй форму!
      </Typography>

      <TextField
        id="outlined-basic"
        label="Ім'я"
        variant="outlined"
        name={"name"}
        value={formData.name}
        onChange={handleChange}
        error={error.name}
        helperText={
          error.name &&
          (formData.name.length ? "Некоректні дані" : "Введіть ваше ім'я")
        }
      />
      <TextField
        id="outlined-basic"
        label="Номер телефону"
        variant="outlined"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={error.phone}
        helperText={
          error.phone &&
          (formData.phone.length
            ? "Будь ласка, введіть коректно номер телефону"
            : "Введіть номер телефону")
        }
      />
      <Button
        color="info"
        sx={{ width: "165px" }}
        type="submit"
        disabled={isLoading}
      >
        Відправити
      </Button>
      <ModalWindow open={open} setOpen={setOpen} />
    </Stack>
  );
}
