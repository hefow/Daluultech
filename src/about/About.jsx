import React from "react";


function About(){
    return (
    <section class="py-10 bg-white-100 lg:py-0">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div class="h-full pr-12 lg:order-2 lg:mb-40">
                <div class="relative h-full lg:h-auto">
                    <div class="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 top-20 left-12 xl:left-16 lg:top-30 lg:scale-y-105 lg:origin-top">
                        <img class="object-cover object-right w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg" alt="" />
                    </div>
                    <div class="relative lg:-top-200">
                        <img class="" src="./images/img-3.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
                <div>
                    <p class="text-sm font-semibold tracking-widest text-black-500 uppercase">Why Should your choose?</p>
                    <h2 class="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Get work done, fast!</h2>
                    <p class="text-xl leading-relaxed text-black-200 mt-9">Whether you’re looking to enhance your digital presence, streamline operations, or build a stronger brand, </p>
                    <p class="mt-6 text-xl leading-relaxed text-black-200">Daluultech is your trusted partner for tech-driven innovation. We pride ourselves on a customer-first approach, delivering quality, reliability, and cutting-edge solutions for businesses of all sizes.</p>
                    <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button"> Explore more </a>
                </div>
            </div>
        </div>
    </div>
    </section>

    )
}

export default About