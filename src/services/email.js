import emailjs from "@emailjs/browser";

// const {  EMAILJS_USER_ID } = process.env;
const EMAILJS_USER_ID = "VVH6gHX1lYaHJ2jC1";

emailjs.init(EMAILJS_USER_ID);

export default emailjs;
