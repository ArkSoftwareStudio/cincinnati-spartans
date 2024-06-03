'use client'
import React, { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'


interface Games {
  'img': any,
  'alt': string
}

type PropType = {
  options?: EmblaOptionsType
  games?: Games[]
}

const GamesCarousel: React.FC<PropType> = (props) => {
  const { games } = props;
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const [isPlaying, setIsPlaying] = useState(false)


  return (
    <div className="relative m-auto w-full h-full">
      <div className="embla__viewport w-full h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {games?.map((item, index) => (
            <div key={index} className='flex flex-row grow-0 h-full w-full shrink-0 basis-full'>
              <div className='h-full w-full'>
                <Image className='h-full object-contain' src={item.img} alt={item.alt}></Image>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default GamesCarousel