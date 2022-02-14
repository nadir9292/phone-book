import Layout from "../components/Layout"

const Home = () => {
  return <h1>HOME</h1>
}

Home.getLayout = (page) => <Layout title="PHONE BOOK">{page}</Layout>

export default Home
