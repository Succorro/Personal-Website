/* eslint-disable react/prop-types */
import { Card,CardBody, Image } from '@nextui-org/react';

function PinnedProjects({project, cardStyle}) {
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
    <div className={cardStyle}>
            <a href={html_url} target='_blank' rel='noopener noreferrer'>
            <Card 
            isPressable 
            shadow='lg'
            className="w-full  bg-gray-200 hover:border-none hover:bg-gray-300  space-y-4 p-4">
                <CardBody className='overflow-visible p-0'>
                    <Image
                    removeWrapper
                    alt="Card background"
                    className="max-h-[120px] w-full "
                    src={image} 
                    />
                </CardBody>
                
                <h4 className="text-gray-600 font-bold text-lg">{name}</h4>
                <p className="text-gray-600 text-sm font-semibold overflow-auto h-[60px]">{description}</p>
            </Card>
            </a>
    </div>
  )
}

export default PinnedProjects