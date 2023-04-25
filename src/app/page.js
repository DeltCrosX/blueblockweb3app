import Image from "next/image";
import LogosPic from "./BoxTech.svg";
import Head from 'next/head';
import TitleLogos from "./favicon.ico";
import Showcaseimage1 from "./assets/ShowcaseIMG.png";

const Page = (props) => { 
  <div>
    <Head>
      <link rel="shortcut icon" href={TitleLogos}/>
    </Head>
  </div>
}

export default function Home() { 
  //code
  return(
    <html>
      <body className="default:dark:bg-gradient-to-r default:dark:from-slate-800 default:dark:to-slate-700 default:dark:text-gray-150">
        {/* code */}
        <nav className="bg-transparent from-slate-500 to-slate-700 border-gray-200 dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="./" class="flex items-center">
              {/* <img src="./BoxTech.svg" class="h-8 mr-3" alt="Blueblock Logo" /> */}
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={LogosPic}
                alt="BlueblockProductionLogos"
                width={30}
                height={30}
                priority
              />
              <span class="self-center text-2xl whitespace-nowrap font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">BlueblockProduction</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Store
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="py-56 px-1 text-center justify-items-center snap-both first-letter:capitalize flex min-w-screen flex-col items-center font-normal bg-gradient-to-r from-slate-500 to-slate-700">
          {/* main hero sections */}
          
          <div className="container justify-items-center">
            <strong className="text-7xl text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">BLUEBLOCKPRODUCTION</strong>
            <br>
            </br>
            <strong className="text-4xl text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">We build, You enjoy!</strong>
          </div>
        </div>
        <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-600 items-center flex min-w-screen flex-col font-normal">
          {/* link secrtions */}
          <div className="container items-center">
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
              <a
                href="./pages/about.js"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  About Us{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Lern more about what is BlueblockProduction and what we've do.
                </p>
              </a>

              <a
                href="./pages/contacts.js"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Contacts{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Contact us directly to apply further informations about your projects.
                </p>
              </a>

              <a
                href="./pages/pricing.js"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Pricing{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Explore the BlueblockProduction monthly merch!
                </p>
              </a>

              <a
                href="./pages/storesys.js"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Store{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Instantly buy genuine copy of our software.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-screen grid grid-flow-col grid-cols-1 grid-row-3 bg-slate-950 justify-center">
          {/* codes section */}
          <div className="text-left text-xl text-white flex flex-col flex-normal">
            {/* main containers */}
            <code className="px-10 py-8 text-gray-500">
              //We make quality software to made our clients happy about it.
            </code>
            <div className="px-10 py-0 grid grid-flow-col grid-cols-2 grid-rows-1 justify-center content-center place-content-center">
              <h1 className="float-left text-left text-4xl font-medium">Our software depends on <code className="font-semibold text-gray-500">`Client/Users`</code> requirements <br></br> We work to make sure user got the best <strong className="text-yellow-500">EXPERIENCES</strong> from our software!</h1>
              
            </div>
            <div className="grid grid-flow-col grid-cols-4 grid-rows-1 gap-3 justify-center px-10 py-11">
              <a
                className="group rounded-lg border border-trasparent px-5 py-4 transition-colors bg-black hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  We care about software relability and usability{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Our mostly care things when we develop a new software is relability and usability of software to improve our products quality to higest level!
                </p>
              </a>
              <a
                className="group rounded-lg border border-trasparent px-5 py-4 transition-colors bg-black hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Clients opinion are the rules to develop on each projects{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  We listen all the conditions and briefing data from client before the project started. but all the things that add to the project by clients which not making any sense we need to charged up the cost.
                </p>
              </a>
              <a
                className="group rounded-lg border border-trasparent px-5 py-4 transition-colors bg-black hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  We gladly to improve any of the details to make you satisfy{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  If clients has any details to improve with a new Ideas in border of base ideas, We gladly to do it for you!
                </p>
              </a>
              <a
                className="group rounded-lg border border-trasparent px-5 py-4 transition-colors bg-black hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  We offer a price of project by fair{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  When we going to offer you a price of projects, we will calculate from how difficult is the projects and how much of cost for the working, Editing and Improving the source code or the system. so you can confident that we calculate you a fair price!
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-screen grid grid-flow-col grid-cols-2 grid-rows-4 bg-gradient-to-r from-gray-800 to-slate-800 justify-center p-7">
          {/* main sections */}
          
        </div>
        <footer className="max-w-screen grid grid-flow-col grid-cols-1 grid-rows-1 bg-gradient-to-r from-slate-600 to-slate-500 justify-center p-7">
          {/* just a fucking footer */}
          <p className="text-xl place-self-center justify-center"> &copy;Copyright 2023 : BlueblockProduction, Inc.</p>
        </footer>
      </body>
    </html> 
  )
}

export async function getServerSideProps() { 
  //code
  const res = await fetch(`https://theredprod.cf/data`)
  const data = await res.json()

  return { props: { data } }
}