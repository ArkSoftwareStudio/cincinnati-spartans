'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PauseIcon, PlayIcon } from '@heroicons/react/20/solid'

interface Social {
  icon: any;
  link: string;
}

interface AutoScrollOptions {
  stopOnInteraction?: boolean;
  [key: string]: any;
}

declare module 'embla-carousel' {
  interface EmblaCarouselType {
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: () => boolean;
    canScrollNext: () => boolean;
    on(event: 'reInit' | 'select' | 'autoScroll:play' | 'autoScroll:stop', callback: () => void): void;
    off(event: 'reInit' | 'select' | 'autoScroll:play' | 'autoScroll:stop', callback: () => void): void;
    plugins: () => { autoScroll?: AutoScrollPlugin };
  }

  interface EmblaEventType {
    'reInit': void;
    'select': void;
    'autoScroll:play': void;
    'autoScroll:stop': void;
  }
}

interface AutoScrollPlugin {
  isPlaying: () => boolean;
  options: {
    stopOnInteraction: boolean;
    [key: string]: any;
  };
  reset: () => void;
  stop: () => void;
  play: () => void;
}

interface Person {
  name: string;
  nickname: string;
  position: string;
  email: string;
  picture: any;
  socials: Social[];
}

type PropType = {
  people: Person[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { people, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.5 })
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll?.options?.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = emblaApi.plugins()?.autoScroll as AutoScrollPlugin;
    if (!autoScroll) return;

    const handleAutoScrollPlay = () => setIsPlaying(true);
    const handleAutoScrollStop = () => setIsPlaying(false);
    const handleReInit = () => setIsPlaying(autoScroll.isPlaying());

    setIsPlaying(autoScroll.isPlaying());

    emblaApi.on('autoScroll:play', handleAutoScrollPlay);
    emblaApi.on('autoScroll:stop', handleAutoScrollStop);
    emblaApi.on('reInit', handleReInit);

    return () => {
      emblaApi.off('autoScroll:play', handleAutoScrollPlay);
      emblaApi.off('autoScroll:stop', handleAutoScrollStop);
      emblaApi.off('reInit', handleReInit);
    };
  }, [emblaApi]);

  return (
    <div className="m-auto w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {people.map((person, index) => (
            <div className="flex basis-1/5 shrink-0 grow-0" key={index}>
              <div className="flex hover:scale-110 select-none hover:cursor-grabbing transition-all flex-col items-center items-center justify-center my-14 mx-4 bg-gradient-to-b from-zinc-800/90 via-zinc-700/90  to-zinc-800/90 w-64 h-96 rounded-md border border-sky-500 shadow-purple-500/50 shadow-lg hover:shadow-md text-white">
                <Image className="w-36 mt-4 rounded-full" src={person.picture} alt={`${person.nickname} CEO Picture`} />
                <h1 className="text-white font-chakra mt-2">{person.name}</h1>
                <h1 className="text-white text-sm font-chakra"><span className='font-medium'>@</span> {person.nickname}</h1>
                <h1 className="text-white font-medium mt-10 font-chakra">{person.position}</h1>
                <h1 className="text-white text-sm font-chakra">{person.email}</h1>
                <div className="flex flex-row mt-4 justify-between items-center">
                  {person.socials.map((social, socialIndex) => (
                    <a key={socialIndex} href={social.link} className="mx-2">
                      <FontAwesomeIcon icon={social.icon} color="white" height={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel;
