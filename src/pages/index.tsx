import Head from "next/head"

import Logo from "../components/Icons/Logo";
import Particles from "../components/Particles";

import jsconfTheme from "../styles/theme";
import { seo, hero, links, footer } from "../utils/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {seo.metadata.map(metadata => <meta key={metadata.name} {...{[metadata.category as string]: metadata.name }} content={metadata.content} />)}
      </Head>
        <main className="text-black height">
          <div className="h-100 lg:h-[calc(100vh-82px)]">
          <div className="absolute bg-jsconf-yellow w-full h-full -z-10  blur-sm">
            <Particles id={"home"} />
          </div>
          <div className="flex flex-col lg:flex-row overflow-scroll">
            <div className="flex text-left h-screen justify-center flex-col flex-auto p-8 text-jsconf-black lg:basis-1/3 lg:shrink-0">
              <div className="flex justify-self-start pt-8 pb-6 ">
                <Logo color={jsconfTheme.colors.jsconfBlack} />
              </div>
              <h1 className="text-6xl font-bold font-koulen mb-8">
                JSConf CHILE
              </h1>
                <div className="mb-8">
                {hero
                  .split("\n")
                  .filter(Boolean)
                  .map((line, i) => (
                    <div key={i} className="text-left mb-4">{line}</div>
                  ))}
              </div>
            </div>
            {links
              .map(link => (
                <div className="flex-auto h-[32rem] lg:basis-3/12 lg:hover:basis-2/3 lg:h-screen transition-all lg:brightness-75 hover:brightness-100 text-white hover:text-jsconf-yellow"  style={{ backgroundImage: `url("${link.photo}")`, backgroundPosition: "center", backgroundSize: "cover" }} key={link.id}>
                  <a className="w-full h-full flex justify-center items-end lg:items-center"href={link.url}>
                    <h5 className="mb-2 text-3xl font-koulen inline p-4 bg-jsconf-black bg-opacity-80">{link.name}</h5>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </main>
      <footer className="bg-black text-white p-4 flex justify-between items-center font-koulen flex-col lg:flex-row gap-4 relative z-10">
        <div><Logo color="#fff" size="50px" /></div>
        <div className="flex gap-4 flex-col lg:flex-row text-center lg:gap-8">
          {footer.map(link => <a key={link.url} href={link.url}>{link.name}</a>)}
        </div>
      </footer>
    </>
  )
}
