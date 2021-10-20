import { sanityClient } from '../sanity'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = ({posts}) => {
  console.log(posts)
  return (
    <>
    AJM_FRONT
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "post"]'
  const posts = await sanityClient.fetch(query)

  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    }
  } else {
    return {
      props: {
        posts,
      },
    }
  }
}

export default Home
