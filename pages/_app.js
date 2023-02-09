import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <div className='bg-[#FAEDF2]'>
<Component {...pageProps} />
    </div>
  )
}
