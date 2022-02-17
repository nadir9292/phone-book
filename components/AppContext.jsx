import faker from "faker"
import { createContext, useCallback, useState } from "react"

const initialState = {
  entries: [
    {
      activity: faker.name.jobTitle(),
      nameContact: faker.name.firstName(),
      adress: faker.address.streetAddress(),
      postcode: faker.address.zipCode(),
      city: faker.address.city(),
      number: faker.phone.phoneNumber(),
    },
    {
      activity: faker.name.jobTitle(),
      nameContact: faker.name.firstName(),
      adress: faker.address.streetAddress(),
      postcode: faker.address.zipCode(),
      city: faker.address.city(),
      number: faker.phone.phoneNumber(),
    },
    {
      activity: faker.name.jobTitle(),
      nameContact: faker.name.firstName(),
      adress: faker.address.streetAddress(),
      postcode: faker.address.zipCode(),
      city: faker.address.city(),
      number: faker.phone.phoneNumber(),
    },
  ],
}

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)
  const addEntry = useCallback(
    ({ activity, nameContact, adress, postcode, city, number }) => {
      setState((currentState) => ({
        ...currentState,
        entries: [
          ...currentState.entries,
          { activity, nameContact, adress, postcode, city, number },
        ],
      }))
    },
    []
  )

  return (
    <AppContext.Provider
      {...props}
      value={{ entries: state.entries, addEntry }}
    />
  )
}

export default AppContext
