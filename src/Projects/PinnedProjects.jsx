/* eslint-disable react/prop-types */
import { Card,CardBody, Image } from '@nextui-org/react';

function PinnedProjects({project, cardStyle, handlePopup}) {
    const {image, name} = project
  return (
    <div className={cardStyle}>
            <Card 
            onClick={()=> handlePopup(project)}
            isPressable 
            className="w-full  bg-gray-200 hover:border-none hover:bg-gray-300  space-y-4 p-3">
                <CardBody className='overflow-visible p-0'>
                    <Image
                    removeWrapper
                    alt="Card background"
                    className="max-h-[120px] w-full "
                    src={image} 
                    />
                </CardBody>
                
                <h4 className="text-gray-600 font-bold text-lg">{name}</h4>
            </Card>
    </div>
  )
}

export default PinnedProjects