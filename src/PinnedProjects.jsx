/* eslint-disable react/prop-types */
// import React from 'react'
import { Card, CardHeader, Image } from '@nextui-org/react';

function PinnedProjects({project}) {
    const {html_url, description} = project
  return (
    <div className='w-full md:w-1/2 lg:w-1/3'>
              <div className='mb-10 overflow-hidden rounded-xl bg-background dark:bg-dark-2 py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-14'>
                <Card isPressable className="col-span-12 bg-background sm:col-span-4">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <h4 className="text-cornflowerblue font-bold text-xl">{project.name}</h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full bg-background"
                    src="/code.png" 
                  />
                  <div className="p-4">
                    <p className="text-gray-500">{description}</p>
                    <a
                      href={html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cornflowerblue mt-4 inline-block underline"
                    >
                      View on GitHub
                    </a>
                  </div>
                </Card>
              </div>
            </div>
  )
}

export default PinnedProjects