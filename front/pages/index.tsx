import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ShortenerForm from '../components/ShortenerForm/ShortenerForm'
import styles from '../styles/Home.module.css';
import * as yup from 'yup';
import { useState } from 'react';
import ShortenedUrlBlock from '../components/ShortenedUrlBlock/ShortenedUrlBlock';

const Home: NextPage = () => {

    const [shortenedUrl, setShortenedUrl] = useState('')
  return (
   <>
   <ShortenedUrlBlock shortenedUrl={shortenedUrl}  />
   <ShortenerForm setShortenedUrl ={setShortenedUrl} />
   </>
  )
}

export default Home
