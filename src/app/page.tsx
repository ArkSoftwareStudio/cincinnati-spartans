import Link from "next/link";
import Image from "next/image";

import { faTwitch, faTiktok, faInstagram, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { ArrowUpRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'

import { CSArmSleeve, CSHoodie, CSJerseyFront, DivineStaff, FrazerStaff, KrypticStaff, MindsetStaff, SpadezStaff, csLogo, ValorantLogo, RainbowSix, Overwatch, ValShot1, ValShot2, OverwatchShot, RainbowShot, RainbowShot2, Razer, Rogue } from './MediaFiles';

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import MerchCarousel from "./MerchCarousel";
import './embla.css'
import GamesCarousel from "./GamesCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const OPTIONS: EmblaOptionsType = { loop: true }


var navLinkClass = 'font-chakra drop-shadow-lg font-medium bg-blur text-slate-100 drop-shadow-sm hover:scale-[1.2] transition-all'
const staffMembers = [
  {
    'name': 'Ayden Springer',
    'nickname': 'Kryptic',
    'position': 'Chief Executive Officer',
    'email': 'kryptic@cincinnatispartans.com',
    'picture': KrypticStaff,
    'socials': [
      { 'icon': faTiktok, 'link': 'https://www.tiktok.com/@krypticcod?lang=en' },
      { 'icon': faInstagram, 'link': 'https://www.instagram.com/aydenwsm/' },
      { 'icon': faXTwitter, 'link': 'https://twitter.com/Kryyptic' },
    ]
  },
  {
    'name': 'Michael Gardini',
    'nickname': 'Divine',
    'position': 'Vice President',
    'email': 'divine@cincinnatispartans.com',
    'picture': DivineStaff,
    'socials': [
      { 'icon': faTiktok, 'link': 'https://www.tiktok.com/@cs_divine?_t=8mNp07ErZmc&_r=1' },
      { 'icon': faXTwitter, 'link': 'https://twitter.com/CS_Divine' },
    ]
  },
  {
    'name': 'Mason McCreary',
    'nickname': 'Frazer',
    'position': 'Shareholder',
    'email': 'cincinnatispartans@gmail.com',
    'picture': FrazerStaff,
    'socials': [
      { 'icon': faTiktok, 'link': 'https://www.tiktok.com/@frazer.boi?_t=8mNadSFnRKp&_r=1' },
      { 'icon': faTwitch, 'link': 'https://twitch.tv/cs_imfrzer' },
    ]
  },
  {
    'name': 'Kenny Janssen',
    'nickname': 'Spadez',
    'position': 'Chief Operations Officer',
    'email': 'spadez@cincinnatispartans.com',
    'picture': SpadezStaff,
    'socials': [
      { 'icon': faTiktok, 'link': 'https://www.tiktok.com/@itzspadezrl?_t=8mNkdH4kjXC&_r=1' },
      { 'icon': faTwitch, 'link': 'https://m.twitch.tv/cs_spadez/home' },
    ]
  },
  {
    'name': 'Thomas Gardini',
    'nickname': 'Mindset',
    'position': 'Chief Marketing Officer',
    'email': 'cincinnatispartans@gmail.com',
    'picture': MindsetStaff,
    'socials': [
      { 'icon': faTiktok, 'link': 'https://www.tiktok.com/@cincispartans?lang=en' },
      { 'icon': faInstagram, 'link': 'https://www.instagram.com/cincispartans/' },
      { 'icon': faXTwitter, 'link': 'https://twitter.com/cincispartans' },
    ]
  },
]

const merchProducts = [
  {
    'name': 'Crew Neck Jersey',
    'price': 62.99,
    'img': CSJerseyFront,
    'productLink': 'https://exclaim.gg/store/cincispartans/8fviwain'
  },
  {
    'name': 'Full-Zip Hoodie',
    'price': 62.57,
    'img': CSHoodie,
    'productLink': 'https://exclaim.gg/store/cincispartans/v8hf2fkm'
  },
  {
    'name': 'Arm Sleeve',
    'price': 27.99,
    'img': CSArmSleeve,
    'productLink': 'https://exclaim.gg/store/cincispartans/ben3eno1'
  }
]

const games = [
  { img: ValShot1, alt: 'Valorant Gameplay' },
  { img: ValShot2, alt: 'Valorant Gameplay' },
  { img: OverwatchShot, alt: 'Overwatch Gameplay' },
  { img: RainbowShot, alt: 'Rainbow Six Siege Gameplay' },
  { img: RainbowShot2, alt: 'Rainbow Six Siege Gameplay' },
]

const socials = [
  { icon: faDiscord, link: 'https://discord.gg/rkkUuhHwep' },
  { icon: faXTwitter, link: 'https://x.com/cincispartans' },
  { icon: faTwitch, link: 'https://www.twitch.tv/cincispartans' },

]

export default function Home() {
  return (
    <main className="flex min-h-screen w-[95vw] border border-t-0 border-b-0 border-sky-500/50 mx-auto flex-col items-center justify-between">
      <section className="relative z-20 border-b border-sky-500/50 flex flex-col h-[80vh] w-full bg-zinc-900/[0.95]">

        {/*  Navigation */}
        <div className="absolute top-0 w-full h-full">
          <nav className="sticky backdrop-blur-sm z-40 max-w-fit inset-x-0 mx-auto max-h-12 shadow-md shadow-slate-950/40 bg-gradient-to-r from-white/[.02] via-white/[0.3] to-white/[.02] bg-blur flex space-x-4 px-6 items-center justify-between top-14 my-14 rounded-full">
            <div className="flex justify-between space-x-8 p-2">
              <Link href='/' className={navLinkClass}>Home</Link>
              <Link href='/staff' className={navLinkClass}>Staff</Link>
            </div>

            <div className="overflow-visible mx-2">
              <Image src={csLogo} alt="Cincinnati Spartans Logo" />
            </div>

            <div className="flex justify-between space-x-8 p-2">
              <Link href='/rosters' className={navLinkClass}>Roster</Link>
              <Link href='https://cincinnati-spartans.myspreadshop.com/cincinnati+spartans+apparel?idea=65854ebdf6a63715a6289fb3' className={navLinkClass}>Shop</Link>
            </div>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="h-full bg-[url(imgs/scifiBackground.jpg)] bg-cover bg-center flex justify-center w-full bg-zinc-900/50">
          <div className="bg-zinc-950/70 z-10 w-full flex flex-col justify-center items-center">
            <h1 className="font-lobster bg-clip-text bg-[url('imgs/topography.svg')] bg-slate-100/85 text-transparent text-8xl  my-4">Cincinnati Spartans</h1>

            <div className="my-4 flex flex-row space-x-4 justify-between items-center">
              <a href="https://discord.gg/rkkUuhHwep" target="_blank" className='bg-zinc-950/80 border h-12 flex justify-center items-center border-sky-500/50 px-3 py-2 hover:scale-[1.1] transition-all hover:fill-slate-300 fill-slate-400 shadow-zinc-900/60 shadow-md'>
                <svg className="mx-2 duration-300" height="24" viewBox="0.9 0.9 725.6 198.29999999999998" xmlns="http://www.w3.org/2000/svg"><path d="M106.8 84.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zm-36.5 0c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z" /><path d="M155.4.9h-134C10.1.9.9 10.1.9 21.4v134c0 11.3 9.2 20.5 20.5 20.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V21.4C175.9 10.1 166.7.9 155.4.9zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1C30.6 83.5 45 57.6 45 57.6c14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8c10.7-4.7 19.2-5.9 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zm151-86.7h-33.2V81l22.1 19.9V64.7h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2V73.6c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7V72.8c0-11 19.8-13.5 25.8-2.5l18.3-7.4c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zM381.3 77c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V43.7h-22.4zM692 43.7h-33.2V81l22.1 19.9V64.7h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1H692c17.8.1 34.5-8.8 34.5-29.2V73.6c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V73c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V73c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10zM646.4 73c-.5-20.8-14.7-29.2-33-29.2h-35.5v88.8h22.7v-28.2h4l20.6 28.2h28L629 102.1c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2V64.7h13.2c14.1 0 14.1 20.3 0 20.3z" /></svg>
              </a>
              <a href="https://cincinnati-spartans.myspreadshop.com/cincinnati+spartans+apparel?idea=65854ebdf6a63715a6289fb3" className='hover:text-white hover:stroke-white hover:bg-zinc-950/95 hover:scale-[1.05] transition-all min-w-24 w-fit px-4 flex flex-row justify-center items-center bg-slate-100/90 shadow-md shadow-slate-900/60 min-h-12 border border-zinc-800 hover:border-sky-500/50'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height={24}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <h2 className="font-lobster">Support Us!</h2>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-50 border-b border-sky-500/50 -z-20 flex flex-col flex-wrap w-full h-[230vh] backdrop-brightness-50">

        <div className="w-full h-80 select-none border-b border-sky-500/50 flex flex-row justify-center flex-wrap">
          <div className="relative w-full overflow-hidden flex justify-center items-center">
            <div className="absolute h-full w-80 rotate-45 border border-sky-500"></div>
            <div className="absolute left-14 top-0 h-1/2 md:w-1/4 lg:w-1/3 border-b border-sky-500"></div>
            <div className="absolute right-14 top-0 h-1/2 md:w-1/4 lg:w-1/3 border-b border-sky-500"></div>
            <ChevronDoubleLeftIcon className="absolute w-8 md:w-6 sm:w-4 stroke-sky-500 left-8" />
            <ChevronDoubleRightIcon className="absolute w-8 md:w-6 sm:w-4 stroke-sky-500 right-8" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-chakra font-light h-4 text-lg font-bold text-sky-400 uppercase">Where Legends are Born</h1>
              <p className="font-chakra font-light mt-2 h-4 text-sm font-light text-white uppercase">Meet the Teams</p>
              <a href="#Rosters" className="z-20 transition-all duration-500 flex flex-row justify-center items-center text-black bg-sky-500 hover:bg-sky-600 font-chakra font-medium px-6 py-2 my-2 text-2xl">Rosters <ArrowUpRightIcon className="w-6 p-1 stroke-black" /> </a>
            </div>
          </div>
          <div>
          </div>
        </div>

        <div className="min-h-[75vh] w-full border-b border-sky-500/40">
          <MerchCarousel products={merchProducts} options={OPTIONS} />
        </div>

        <div className="bg-[url('imgs/endless-clouds.svg')] border-b border-sky-500/50 flex flex-row bg-zinc-950 w-full h-[90vh]">
          {/* Left Side */}
          <div className="w-1/2 flex flex-col h-full border-r border-sky-500/50">
            <div className="w-full border-b border-sky-500/50 h-1/2 flex flex-row">
              {socials.map((social, index) => (
                <div className={`relative h-full w-1/3 flex justify-center items-center text-zinc-700 ${index === 1 ? 'border-x border-sky-500/50' : ''}`} key={index}>
                  <div className="absolute top-1 right-1 w-10 h-10 p-1"> <ArrowUpRightIcon className="stroke-zinc-800" /> </div>
                  <a target="_blank" className="h-full w-full flex justify-center items-center hover:bg-zinc-800/50" href={social.link}>
                    <FontAwesomeIcon className='w-full text-sky-700 text-7xl' icon={social.icon} />
                  </a>
                </div>
              ))

              }
            </div>

            <div className="relative grow">
              <div className="z-40 absolute bg-zinc-950/30 h-full w-full"></div>
              <GamesCarousel games={games} options={OPTIONS} />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 h-full border-sky-500/50 flex flex-col">

            {/* Upper Container */}
            <div className="h-1/2 w-full flex flex-col justify-center items-center px-8 border-b border-sky-500/50">
              <h1 className="italic font-chakra font-light text-xl text-center text-sky-500">
                {`"The Cincinnati Spartans are more than just an Esports team – we're a community for all types of gamers, casual or competitive. We're committed to fostering growth, success, and camaraderie among our members. With dedicated staff, expert coaches, valuable sponsorships, and exciting events and giveaways, there's something here for everyone."`}
              </h1>
            </div>

            {/* Lower Container */}
            <div className="h-1/2 w-full flex flex-row">
              <div className="h-full w-1/3 bg-zinc-950/90 hover:bg-zinc-900/90 flex justify-center items-center">
                <Image width={175} src={ValorantLogo} alt="Valorant Logo"></Image>
              </div>
              <div className="h-full w-1/3 bg-zinc-950/90 hover:bg-zinc-900/90 border-x border-sky-500/50 flex justify-center items-center">
                <Image width={100} src={RainbowSix} alt="Rainbow Six Logo"></Image>
              </div>
              <div className="h-full w-1/3 bg-zinc-950/90 hover:bg-zinc-900/90 flex justify-center items-center">
                <Image width={250} src={Overwatch} alt="Overwatch 2 Logo"></Image>
              </div>
            </div>

          </div>
        </div>

      </section>

      <footer className="relative h-[40vh] flex flex-row py-10 px-8 w-full bg-black text-zinc-500 font-chakra">
        <div className="w-1/3 h-full justify-end flex flex-col">
          <Image className="h-28 w-28" src={csLogo} alt="CS LOGO"></Image>
          <h1 className="ml-4 text-sm"><span>&copy;</span>2024. Cincinnati Spartans. All Rights Reserved</h1>
          <div className="ml-4 mt-4 flex flex-row justify-between w-1/4 text-sky-600 text-xl">
            <a><FontAwesomeIcon icon={faDiscord} /></a>
            <a><FontAwesomeIcon icon={faInstagram} /></a>
            <a><FontAwesomeIcon icon={faTwitch} /></a>
            <a><FontAwesomeIcon icon={faXTwitter} /></a>
          </div>
        </div>
        <div className="w-1/3 uppercase justify-around h-full flex flex-col">
          <h1 className="font-medium mb-2 uppercase text-zinc-200">About</h1>
          <a>Organization</a>
          <a>Staff</a>
          <a>Rosters</a>
          <a>History</a>
          <a>Sponsors</a>
          <a>Events</a>
        </div>

        <div className="w-1/3 h-full flex flex-col justify-between items-center">
          <Image height={80} src={Razer} alt="Razer Logo"></Image>
          <Image height={250} src={Rogue} alt="Rogue Logo"></Image>
        </div>
      </footer>

    </main>
  );
}
