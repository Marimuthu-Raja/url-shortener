import React,{useState} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import TinyURL from 'tinyurl'
function Body() {

    const [url,setUrl] = useState('')
    const [shortenurl,setshortenUrl] = useState('')
    const [copy,setCopy] = useState(false)

    const shorten = () =>{
        TinyURL.shorten(url,(res,err)=>{
            console.log(res)
            setshortenUrl(res)
        })
    }

    return (
        <>
        <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Easy URL Shortener</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Easiest URL Shortner for your Affliate and Long urls. Get Your Shortened URL in just a second. Easy URL Shortener makes links short in a one click. Short links are easier to post on social networks.</p>
            </div>
            <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div class="relative sm:mb-0 flex-grow w-full">
                <h3 for="email" class="leading-7 font-medium text-white">Enter Your URL</h3>
                <input type="email" placeholder="Enter URL" id="email" name="email" onChange={(e)=>setUrl(e.target.value)} class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={shorten}>Shorten</button>
            </div>
        </div>
        </section>
        <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
            <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{shortenurl}</h1>
            {/* <p class="leading-relaxed mb-8">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p> */}
            <div class="flex justify-center">
                <CopyToClipboard text={shortenurl} onCopy={()=>setCopy(true)}>
                {shortenurl!==''?<button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Copy</button>:<></>}
                </CopyToClipboard>
                {/* <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button> */}
                <span>{copy?"copied":""}</span>
            </div>
            </div>
        </div>
        </section>
      </>
    )
}

export default Body
