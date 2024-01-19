/* eslint-disable react/prop-types */
// import React from 'react'
import { Card,CardBody, Image } from '@nextui-org/react';

function PinnedProjects({project}) {
    const {html_url, description} = project
  return (
    <div className='w-full md:w-1/2 lg:w-1/3'>
        <div className='sm:ml-16 sm:mr-16 md:ml-10 md:mr-0'>
        <Card isPressable className="w-full md:w-4/5 lg:w-3/5 max-h-[400px] space-y-5 p-6 mb-10">
            <CardBody>
                <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full bg-background"
            src="/code.png" 
            />
            </CardBody>
            
            <h4 className="text-cornflowerblue font-bold text-xl">{project.name}</h4>
            <div className="p-4">
                <p className="text-gray-500">{description}</p>
                    <a
                        href={html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cornflowerblue mt-0 inline-block underline"
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