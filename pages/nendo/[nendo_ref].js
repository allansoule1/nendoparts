import React from 'react'
import Head from 'next/head'
import {Footer} from '../../components'
import {Header, Card} from '../../components/List';
import {withRouter} from 'next/router';

class Detail extends React.Component {
    render() {

        const router = this.props.router;
        const parts = this.props.parts;

        const urlBackground = "./background.jpg";
        let part;
        if(typeof parts !== "undefined"){
            part = parts.filter(part => part.reference === router.query.nendo_ref)[0];
        }


        return (
            <>
                <Head>
                    <title>Nendo parts</title>
                </Head>

                <Header urlBackground={urlBackground}/>

                {typeof part === "undefined" ? "loading" : <Card part={part}></Card>}



                <Footer/>
                <style jsx>{`
  
            `}
                </style>
                <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        
        h1, h2, h3, h4, h5{
          margin:0;
        }
      `}</style>
            </>
        )
    }
}

export default withRouter(Detail);

export async function getStaticProps(context) {
    console.log(context);
    const res = await fetch("http://localhost:3000/nendoparts");
    console.log(res);
    const parts = await res.json();

    return {
        props: {
            parts
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}
