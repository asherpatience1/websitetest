import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Script from 'next/script'
import Testimonial from '@/components/Testimonial'
import AskYourself from '@/components/AskYourself'
import OffshoringPartner from '@/components/OffshoringPartner'
import Why_Sec from '@/components/Why_Sec'
import StartHiring from '@/components/StartHiring'
import Offshoring from '@/components/Offshoring'
import Chat from '@/components/Chat'
import Form from '@/components/Form'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Diovec</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />        
      </Head>
      <main>
        <Header />
        <Banner />
        <Testimonial />
        <AskYourself />
        <OffshoringPartner />
        <Why_Sec />
        <StartHiring />
        <Offshoring />
        <Chat />
        <Form />
        <Faq />
        <Footer />

        <Script strategy='beforeInteractive' src="js/jquery-3.5.1.min.js" />
        <Script strategy='beforeInteractive' src="js/slick.min.js" />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        <Script src="js/common.js" />
      </main>
    </>
  )
}
