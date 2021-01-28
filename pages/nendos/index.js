import Head from 'next/head'
import Link from 'next/link'
import {Layout} from '../../components'

export default function FirstPost({ parts }) {
    return (
        <>
        <Layout>
            <Head>
                <title>Nendo parts</title>
            </Head>
            <h1>Nendo Parts to buy !</h1>
            {
              <ul>
            {parts.map((part) => (
            <li>{part.name}</li>
            ))
            }
            </ul>
            }
            <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
            </h2>
        </Layout>
        </>
        
      )
  }
  
  export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/nendoparts")
    console.log(res)
    const parts = await res.json()
  
    return {
      props: {
      parts
    }
  }
  }