import Head from 'next/head'
import Link from 'next/link'
import {Layout} from '../../components'

export default function FirstPost() {
    return (
        <>
        <Layout>
            <Head>
                <title>Nendo parts</title>
            </Head>
            <h1>Nendo Parts to buy !</h1>
            <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
            </h2>
        </Layout>
        </>
      )
  }
  