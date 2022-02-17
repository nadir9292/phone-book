import { Formik } from "formik"
import Button from "../components/Button"
import Layout from "../components/Layout"
import FormField from "../components/formUI/FormField"
import * as yup from "yup"
import {
  activityValidator,
  nameContactValidator,
  adressValidator,
  postcodeValidator,
  cityValidator,
  phoneNumberValidator,
} from "../validators/validators"
import { useCallback, useContext, useState } from "react"
import AppContext from "../components/AppContext"
import Popup from "../components/popup"

const initialValues = {
  activity: "",
  nameContact: "",
  adress: "",
  postcode: "",
  city: "",
  number: 0,
}

const validationSchema = yup
  .object()
  .shape({
    activity: activityValidator.required(),
    nameContact: nameContactValidator.required(),
    adress: adressValidator.required(),
    postcode: postcodeValidator.required(),
    city: cityValidator.required(),
    number: phoneNumberValidator.required(),
  })
  .required()

const AddEntry = () => {
  const { addEntry } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    (
      { activity, nameContact, adress, postcode, city, number },
      { resetForm }
    ) => {
      addEntry({ activity, nameContact, adress, postcode, city, number })
      resetForm()
    },
    [addEntry]
  )

  const [buttonPopup, setButtonPopup] = useState(false)

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
            <FormField name="nameContact" type="text">
              Name
            </FormField>
            <FormField name="adress" type="text">
              Adress
            </FormField>
            <FormField name="postcode" type="number">
              Postcode
            </FormField>
            <FormField name="city" type="text">
              City
            </FormField>
            <FormField name="number" type="number">
              Phone number
            </FormField>
            <Button
              onClick={() => setButtonPopup(true)}
              type="submit"
              //find a way to disable the button from the beginning
              disabled={isSubmitting || !isValid}
              variant="btnValidation"
              size="lg"
            >
              ADD NEW ENTRY
            </Button>
          </form>
        )}
      </Formik>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1 className=" font-bold leading-7 text-gray-900 sm:text-xl sm:truncate flex items-center p-2">
          GG, you just added a new contact in your phone book !
        </h1>
        <h3 className="text-xs">Sorry for this ugly popup 🤦‍♂️</h3>
      </Popup>
    </div>
  )
}

AddEntry.getLayout = (page) => <Layout title="ADD NEW ENTRY">{page}</Layout>

export default AddEntry
