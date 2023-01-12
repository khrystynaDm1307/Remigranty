import { Button, Stack, TextField, Typography } from "@mui/material";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export function CityForm() {
  const [state, handleSubmit] = useForm("mnqrkogp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <Stack
      // component="form"
      autoComplete="off"
      spacing={2}
      sx={{ width: "100%", maxWidth: "340px", mt: 8 }}
    >
      <Typography>
        Хочеш допомогти своєму місту? Тоді заповнюй форму!
      </Typography>
      <TextField id="outlined-basic" label="Ім'я" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Номер телефону"
        variant="outlined"
      />
      <Button color="primary" sx={{width:"165px"}}>Відправити</Button>

    </Stack>
  );
}
