import { useContext } from "react"
import AppContext from "../components/AppContext"
import Layout from "../components/Layout"
import Table from "../components/table"

const Home = () => {
  const { entries } = useContext(AppContext)

  return <Table entries={entries}></Table>
}

Home.getLayout = (page) => <Layout title="PHONE BOOK">{page}</Layout>

export default Home
