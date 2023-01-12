import Joi from "joi";

export const phone = Joi.string().regex(/^\+\d{10,15}$/);
