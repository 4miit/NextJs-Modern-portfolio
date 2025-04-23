import { section } from 'motion/react-client'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { GridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>

        {GridItems.map(({img,id,className,titleClassName, spareImg,description,title}) =>(
            <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            spareImg={spareImg}
            titleClassName={titleClassName}
            />
         ))}
              </BentoGrid>
    </section>
  )
}

export default Grid