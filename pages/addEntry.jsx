import { Formik } from "formik"
import Button from "../components/Button"
import Layout from "../components/Layout"
import FormField from "../components/formUI/FormField"
import * as yup from "yup"
import {
  activityValidator,
  nameContactValidator,
  adressValidator,
  postalCodeValidator,
  cityValidator,
  phoneNumberValidator,
} from "../validators/validators"
import { useCallback, useContext } from "react"
import AppContext from "../components/AppContext"

const initialValues = {
  activity: "",
  nameContact: "",
  adress: "",
  postalCode: "",
  city: "",
  number: 0,
}

const validationSchema = yup
  .object()
  .shape({
    activity: activityValidator.required(),
    nameContact: nameContactValidator.required(),
    adress: adressValidator.required(),
    postalCode: postalCodeValidator.required(),
    city: cityValidator.required(),
    number: phoneNumberValidator.required(),
  })
  .required()

const AddEntry = () => {
  const { addEntry } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    (
      { activity, nameContact, adress, postalCode, city, number },
      { resetForm }
    ) => {
      addEntry({ activity, nameContact, adress, postalCode, city, number })
      resetForm()
    },
    [addEntry]
  )

  return (
    <div className="flex justify-center">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, isValid, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-4"
          >
            <FormField name="activity" type="text">
              Activity
            </FormField>
            <FormField
              name="nameContact"
              placeholder="Enter a name !"
              type="text"
            >
              Name
            </FormField>
            <FormField name="adress" placeholder="Enter a adress !" type="text">
              Adress
            </FormField>
            <FormField
              name="postalCode"
              placeholder="Enter a postal code !"
              type="number"
            >
              Postal Code
            </FormField>
            <FormField name="city" placeholder="Enter a city !" type="text">
              City
            </FormField>
            <FormField
              name="number"
              placeholder="Enter a phone number !"
              type="number"
            >
              Phone number
            </FormField>
            <Button
              type="submit"
              disabled={isSubmitting || !isValid}
              variant="btnValidation"
              size="lg"
            >
              ADD NEW ENTRY
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

AddEntry.getLayout = (page) => <Layout title="ADD NEW ENTRY">{page}</Layout>

export default AddEntry
