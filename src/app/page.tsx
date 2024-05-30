import Link from "next/link";
import Image from "next/image";

import { faTwitch, faTiktok, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { ArrowUpRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'

import { CSArmSleeve, CSHoodie, CSJerseyFront, DivineStaff, FrazerStaff, KrypticStaff, MindsetStaff, SpadezStaff, csLogo, ValorantLogo, RainbowSix, Overwatch } from './MediaFiles';

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import MerchCarousel from "./MerchCarousel";
import './embla.css'



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

export default function Home() {
  return (
    <main className="flex min-h-screen w-[95vw] border border-t-0 border-b-0 border-sky-500/50 mx-auto flex-col items-center justify-between">
      <section className="relative z-20 border-b border-sky-500 flex flex-col h-[80vh] w-full bg-zinc-900/[0.95]">

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
        <div className="h-full bg-[url('imgs/herobanner2.png')] bg-cover flex justify-center w-full bg-zinc-900/50">
          <div className="bg-zinc-950/70 z-10 w-full flex flex-col justify-center items-center">
            <h1 className="font-lobster bg-clip-text bg-[url('imgs/topography.svg')] bg-slate-100/85 text-transparent text-8xl  my-4">Cincinnati Spartans</h1>

            <div className="my-4 flex flex-row space-x-4 justify-between items-center">
              <a href="https://discord.gg/rkkUuhHwep" target="_blank" className='bg-zinc-950/85 px-3 py-2 hover:scale-[1.1] transition-all hover:fill-slate-300 fill-slate-400 rounded-full shadow-zinc-900/60 shadow-md'>
                <svg className="mx-2 duration-300" height="24" viewBox="0.9 0.9 725.6 198.29999999999998" xmlns="http://www.w3.org/2000/svg"><path d="M106.8 84.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zm-36.5 0c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z" /><path d="M155.4.9h-134C10.1.9.9 10.1.9 21.4v134c0 11.3 9.2 20.5 20.5 20.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V21.4C175.9 10.1 166.7.9 155.4.9zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1C30.6 83.5 45 57.6 45 57.6c14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8c10.7-4.7 19.2-5.9 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zm151-86.7h-33.2V81l22.1 19.9V64.7h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2V73.6c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7V72.8c0-11 19.8-13.5 25.8-2.5l18.3-7.4c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zM381.3 77c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V43.7h-22.4zM692 43.7h-33.2V81l22.1 19.9V64.7h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1H692c17.8.1 34.5-8.8 34.5-29.2V73.6c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V73c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V73c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10zM646.4 73c-.5-20.8-14.7-29.2-33-29.2h-35.5v88.8h22.7v-28.2h4l20.6 28.2h28L629 102.1c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2V64.7h13.2c14.1 0 14.1 20.3 0 20.3z" /></svg>
              </a>
              <a href="https://cincinnati-spartans.myspreadshop.com/cincinnati+spartans+apparel?idea=65854ebdf6a63715a6289fb3" className='hover:text-white hover:stroke-white hover:bg-zinc-950/95 hover:scale-[1.05] transition-all min-w-24 w-fit px-4 flex flex-row justify-center items-center bg-slate-100/95 shadow-md shadow-slate-900/60 rounded-full min-h-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height={24}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <h2 className="font-lobster">Support Us!</h2>
              </a>
            </div>
            <div className="flex flex-row space-x-4 h-12 z-40 max-h-14 justify-center items-center">
              <a target="_blank" href="https://x.com/cincispartans">
                <svg className="fill-white hover:fill-slate-200 hover:scale-[1.1] transition-all" xmlns="http://www.w3.org/2000/svg" width="34" viewBox="0 0 48 48">
                  <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 18.064453 A 1.50015 1.50015 0 1 0 9 18.064453 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 22.830078 A 1.50015 1.50015 0 1 0 42 22.830078 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 13.828125 14 L 21.564453 25.056641 L 13.822266 34 L 15.865234 34 L 22.46875 26.351562 L 27.820312 34 L 34.257812 34 L 26.025391 22.234375 L 33.136719 14 L 31.136719 14 L 25.123047 20.943359 L 20.265625 14 L 13.828125 14 z M 16.935547 15.695312 L 19.498047 15.695312 L 31.150391 32.304688 L 28.587891 32.304688 L 16.935547 15.695312 z M 7.4765625 24.478516 A 1.50015 1.50015 0 0 0 6 26 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 31.5 A 1.50015 1.50015 0 1 0 39 31.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 26 A 1.50015 1.50015 0 0 0 7.4765625 24.478516 z"></path>
                </svg>
              </a>
              <a target="_blank" href="https://www.instagram.com/cincispartans/">
                <svg className="fill-white hover:fill-slate-200 hover:scale-[1.1] transition-all" xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </a>
              <a target="_blank" href="https://www.twitch.tv/cincispartans">
                <svg className="fill-white hover:fill-slate-200 hover:scale-[1.1] transition-all" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 50 50">
                  <path d="M 5.3125 1 L 2 9.8125 L 2 43 L 13 43 L 13 49 L 20.40625 49 L 26.40625 43 L 35.40625 43 L 48 30.4375 L 48 1 Z M 11 6 L 43 6 L 43 28 L 37 34 L 25 34 L 19 40 L 19 34 L 11 34 Z M 20 13 L 20 27 L 26 27 L 26 13 Z M 30 13 L 30 27 L 36 27 L 36 13 Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-50 border-b border-sky-500/50 -z-20 flex flex-col flex-wrap w-full h-[200vh] backdrop-brightness-50">

        <div className="w-full mt-12 h-80 select-none border-y border-sky-500 flex flex-row justify-center flex-wrap">
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

        <div className="bg-[url('imgs/endless-clouds.svg')] flex flex-row bg-zinc-950 grow w-full h-auto">
          {/* Left Side */}
          <div className="w-1/2 h-full border-r border-sky-500/50">

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

      <section className="hidden relative border-b border-sky-500 w-full flex overflow-visible flex-col items-center h-[70vh] bg-[url('imgs/endless-clouds.svg')] bg-zinc-950">

        <div className="z-20 h-full w-full justify-center items-center flex flex-row flex-wrap mt-4 px-16 overflow-visible">
          <EmblaCarousel people={staffMembers} options={OPTIONS} />
        </div>
      </section>

      <footer className="relative h-[50vh] w-full bg-zinc-950">
        <div className="absolute -z-10 w-full h-full bg-gradient-to-b from-sky-500/80 to-purple-950/50"></div>
      </footer>

    </main>
  );
}
