/* eslint-disable react/prop-types */
import { Card,CardBody, Image } from '@nextui-org/react';

function PinnedProjects({project}) {
    const {html_url, description, name} = project
    let image;
    if (name === 'Recipe_Share') {
        image = ''
    } else if (name === 'Full-CRUD-app') {
        image = ''
    } else if (name === 'movie-review-app') {
        image = ''
    } else if (name === 'one-piece-react') {
        image = ''
    } else if (name === 'Brewery_FInder') {
        image = '/Booze.gif'
    } else {
        image = ''
    }
  return (
    <div className='w-full md:w-1/2 lg:w-1/3'>
        <div className='sm:ml-16 sm:mr-16 md:ml-10 md:mr-0'>
            <a href={html_url} target='_blank' rel='noopener noreferrer'>
            <Card isPressable className="w-full md:w-4/5 lg:w-3/5 max-h-[400px] space-y-5 p-6 mb-10">
                <CardBody>
                    <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full bg-background"
                    src={image} 
                    />
                </CardBody>
                
                <h4 className="text-cornflowerblue font-bold text-xl">{name}</h4>
                <div className="p-4">
                    <p className="text-gray-500">{description}</p>
                        
                </div>
            </Card>
            </a>
        </div>
    </div>
  )
}

export default PinnedProjects