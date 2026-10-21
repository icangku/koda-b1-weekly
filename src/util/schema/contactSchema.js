import * as yup from "yup";

export const contactSchema = yup.object({
  fullName: yup.string().trim().required("Fullname is required"),
  phone: yup.string().trim().required("Phone number is required "),
  subject: yup.string().trim().required("Subject is required "),
  country: yup.string().trim().required("Country is required "),
  message: yup.string().trim().required("Message is required "),
  technologies: yup
    .array()
    .of(yup.string())
    .min(1, "Please select technologies")
    .required("Please select technologies"),
});
