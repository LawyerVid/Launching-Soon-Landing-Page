
import React from 'react'
import VideoGroupChatSvg from '#/components/media/svgs/videoChat';
import DisabledButton from './disabledButtonWithToolTip';


const LandingHero = () => {
    return (
        <div className={"flex flex-col mt-3 md:-mt-8 min-h-screenWithoutNav justify-center items-center md:grid md:grid-cols-[1fr_1fr] gap-4 w-full @container/hero"}>
            <div className={"w-full h-full flex flex-col gap-4 justify-center items-center flex-nowrap"}>
                <h1 className={"w-fit text-center text-[10vw] sm:text-[8vw] md:text-[5vw] leading-[1] font-bold"}>Consultations <br /> at your <br /> Convenience</h1>
                <div className={"hidden sm:grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-1 md:grid-rows-[1fr_1fr] lg:grid-cols-[1fr_1fr] lg:grid-rows-1 gap-4"}>
                    <DisabledButton
                        size="lg"
                        label="Attorney Sign Up"
                    />
                    <DisabledButton
                        size="lg"
                        label="Edit Existing Profile"
                    />
                </div>
            </div>
            <VideoGroupChatSvg className={"w-4/5 sm:w-2/3 md:w-full h-full"} />
            <div className={"grid mt-3 grid-cols-1 @[510px]/hero:grid-cols-[1fr_1fr] sm:hidden gap-4"}>
                <DisabledButton
                    size="lg"
                    label="Attorney Sign Up"
                />
                <DisabledButton
                    size="lg"
                    label="Edit Existing Profile"
                />
            </div>
        </div>
    )
}


LandingHero.displayName = "LandingHero"


export default LandingHero;
