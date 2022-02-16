import DivTable from "./TableUi.jsx/DivTable"
import Th from "./TableUi.jsx/Th"
import Td from "./TableUi.jsx/Td"

const Table = (props) => {
  const { entries } = props

  return (
    <DivTable>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 ">
          <tr>
            <Th>Activity</Th>
            <Th>Name</Th>
            <Th>Adress</Th>
            <Th>Postal code</Th>
            <Th>City</Th>
            <Th>Phone number</Th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {entries.map(
            (
              { activity, nameContact, adress, postalCode, city, number },
              index
            ) => (
              <tr key={index}>
                <Td>{activity}</Td>
                <Td>{nameContact}</Td>
                <Td>{adress}</Td>
                <Td>{postalCode}</Td>
                <Td>{city}</Td>
                <Td>{number}</Td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </DivTable>
  )
}

export default Table
