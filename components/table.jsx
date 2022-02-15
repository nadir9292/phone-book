const Table = (props) => {
  const { entries } = props

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Activity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Adress
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Postal code
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone number
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {entries.map(
                  (
                    { activity, nameContact, adress, postalCode, city, number },
                    index
                  ) => (
                    <tr key={index}>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                        {activity}
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                        {nameContact}
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                        {adress}
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                        {postalCode}
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                        {city}
                      </td>
                      <td className="text-left px-6 py-4 whitespace-nowrap">
                        {number}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
