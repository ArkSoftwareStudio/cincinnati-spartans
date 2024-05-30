'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

interface AutoScrollOptions {
  stopOnInteraction?: boolean;
  [key: string]: any;
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

interface Products {
  'name': string,
  'price': number,
  'img' : any,
  'productLink': string
}



type PropType = {
  options?: EmblaOptionsType
  products?: Products[]
}

const MerchCarousel: React.FC<PropType> = (props) => {
  const { products } = props;
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 2 })
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll?.options?.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [emblaApi])

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
  }, [emblaApi])

  return (
    <div className="relative m-auto w-full h-full">
      <div className="embla__viewport w-full h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {products?.map((item, index) => (
            <div key={index} className='flex flex-row grow-0 h-full w-full shrink-0 basis-full'>
              <div className='h-full w-full select-none'>
                <div className='relative h-full w-2/3 flex flex-col justify-center text-white py-16 px-6'>
                  <h1 className='font-chakra font-medium text-sky-500 justify-self-center text-9xl'>{item.name}</h1>
                  <p className='font-chakra font-medium text-white justify-self-center text-2xl mt-8'>${item.price}</p>
                  <a target='_blank' href={item.productLink} className='flex font-chakra bottom-5 bg-sky-500 hover:bg-sky-600 p-2 w-fit font-medium text-black text-2xl hover:cursor-pointer'>View Product <ArrowUpRightIcon className='w-4' /> </a>
                </div>

              </div>
              <div className='flex justify-center grow border-l bg-zinc-950 border-sky-500/50'>
                <Image className='w-3/4' src={item.img} alt='Product Image'></Image>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default MerchCarousel