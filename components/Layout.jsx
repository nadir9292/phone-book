import Head from "next/head"
import Button from "./Button"
import Link from "next/link"

const Layout = (props) => {
  const { title, children } = props

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <div className="flex justify-between bg-zinc-200">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate flex items-center p-2 ">
            {title}
          </h1>
          <div className="flex justify-end">
            <Link href="/" passHref>
              <a>
                <Button type="button" variant="secondary" size="lg">
                  ☎️ Phone Book
                </Button>
              </a>
            </Link>

            <Link href="/addEntry" passHref>
              <a>
                <Button type="button" variant="primary" size="lg">
                  🆕 Add Entry
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
