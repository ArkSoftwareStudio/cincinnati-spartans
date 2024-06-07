'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselArrowButtons'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Autoplay from 'embla-carousel-autoplay'

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
  'img': any,
  'productLink': string
}



type PropType = {
  options?: EmblaOptionsType
  products?: Products[]
}

const MerchCarousel: React.FC<PropType> = (props) => {
  const { products } = props;
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 5000, stopOnMouseEnter: true })])

  const resetAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
    playOrStop()  
  }, [emblaApi])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  return (
    <div  onMouseLeave={resetAutoplay} className="relative m-auto w-full h-full">
      <div className='absolute top-0 w-full h-full flex flex-row justify-between'>
        <div className='w-24 flex flex-col justify-center'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className='w-24 flex flex-col justify-center items-end'>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      </div>
      <div className="embla__viewport w-full h-full" ref={emblaRef}>
        <div className="embla__container z-40 h-full select-none">
          {products?.map((item, index) => (
            <div key={index} className='flex flex-row grow-0 h-full w-full shrink-0 basis-full'>
              <div className='h-full w-full select-none'>
                <div className='relative h-full w-2/3 flex flex-col justify-center text-white py-16 px-6'>
                  <h1 className='font-chakra font-medium text-sky-500 justify-self-center text-9xl'>{item.name}</h1>
                  <p className='font-chakra font-medium text-white justify-self-center text-2xl mt-8'>${item.price}</p>
                  <a target='_blank' href={item.productLink} className='flex z-50 font-chakra bottom-5 bg-sky-500 hover:bg-sky-600 p-2 w-fit font-medium text-black text-2xl hover:cursor-pointer'>View Product <ArrowUpRightIcon className='w-4' /> </a>
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