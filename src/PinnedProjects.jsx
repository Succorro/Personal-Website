/* eslint-disable react/prop-types */
import { Card,CardBody, Image } from '@nextui-org/react';

function PinnedProjects({project}) {
    const {html_url, description, name} = project
    let image;
    if (name === 'Recipe_Share') {
        image = '/Recipe.jpeg'
    } else if (name === 'Hat_Reviewer') {
        image = 'Hat.jpeg'
    } else if (name === 'movie-review-app') {
        image = '/Movie.jpeg'
    } else if (name === 'one-piece-react') {
        image = '/Piece.jpeg'
    } else if (name === 'Brewery_FInder') {
        image = '/Booze.gif'
    } else {
        image = 'coe.png'
    }
  return (
    <div className='w-full md:w-3/6 lg:w-2/6'>
        <div className='sm:ml-16 sm:mr-16 md:ml-10 md:mr-0 lg:ml-5 lg:mr-5'>
            <a href={html_url} target='_blank' rel='noopener noreferrer'>
            <Card 
            isPressable 
            isBlurred
            className="w-full max-h-[500px] hover:border-none hover:bg-gray-100 shadow-xl space-y-5 p-6 mb-10">
                <CardBody>
                    <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full "
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