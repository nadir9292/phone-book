import * as yup from "yup"

export const activityValidator = yup
  .string()
  .min(3)
  .max(50)
  .label("Activity")
  .matches(/^[aA-zZ\s]+$/, "Only letter is allowed")
export const nameContactValidator = yup

  .string()
  .min(3)
  .max(50)
  .label("Name")
  .matches(/^[aA-zZ\s]+$/, "Only letter is allowed")

export const adressValidator = yup.string().min(3).max(50).label("Adress")

export const postcodeValidator = yup
  .string()
  .min(5, "Must be equal to 5")
  .max(5, "Must be equal to 5")

export const cityValidator = yup
  .string()
  .min(3)
  .max(50)
  .label("City")
  .matches(/^[aA-zZ\s]+$/, "Only letter is allowed")

export const phoneNumberValidator = yup
  .string()
  .min(9, "Must be equal to 10 numbers")
  .max(9, "Must be equal to 10 numbers")
