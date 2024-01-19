import {Card, Skeleton} from "@nextui-org/react";

const array = [1, 2, 3]
function ProjectSkeleton() { 
  return (
    <div className="w-[600px] h-[400px] flex flex-wrap justify-center mb-10 ">
        {array.map((skel) => {
            return (
                <Card key={skel} className="w-full md:w-4/5 lg:w-3/5 h-full md:h-4/5 lg:h-3/5 space-y-5 p-6 mb-10" radius="lg">
                    <Skeleton className="rounded-lg">
                        <div className="h-60 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                        <Skeleton className="w-3/5 rounded-lg">
                            <div className="h-10 w-3/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-4/5 rounded-lg pt-2">
                            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                </Card>
            )
        })}
    </div>
  )
}

export default ProjectSkeleton