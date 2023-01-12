import Joi from "joi";
import { name, phone } from "../helpers";

export const ContactFormSchema = Joi.object({
  name,
  phone,
});
