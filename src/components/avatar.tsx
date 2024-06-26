import Image from "next/image"

import { MotionTransition } from "./trasition"


export const Avatar = () => {
    return(
        <MotionTransition position='bottom' className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/avatar-1.png" width={380} height={380} alt="avatar profile" className="w-full h-full"/>
        </MotionTransition>
        
    )
}