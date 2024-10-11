import React from "react";


function Services(){
    return(
        <section class="py-10 bg-white sm:py-16 lg:py-24">
    <h1 className="text-center py-10"> What we over</h1>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-blue-100" width="100" height="100" viewBox="0 0 72 75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                    </svg>
                    <img class="absolute text-blue-600 w-10 h-10" src="./images/brand.png" alt="brand" />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Graphic Design</h3>
                <p class="mt-4 text-base text-gray-600">We help businesses stand out with impactful branding strategies that communicate value and build a strong identity.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-orange-100" width="100" height="100" viewBox="0 0 62 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                    </svg>
                    <img class="absolute text-blue-600 w-10 h-10" src="./images/web.png" alt="web" />

                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Web Development</h3>
                <p class="mt-4 text-base text-gray-600">We create fast, responsive, and user-friendly websites that drive engagement and deliver seamless digital experiences.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-green-100" width="100" height="100" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                    </svg>
                    <img class="absolute text-blue-600 w-10 h-10" src="./images/mobile.png" alt="mobile" />

                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Mobile Development</h3>
                <p class="mt-4 text-base text-gray-600"> Our mobile apps are designed to provide intuitive, feature-rich experiences across all platforms, enhancing your business’s mobile presence.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-purple-100" width="100" height="100" viewBox="0 0 66 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                    </svg>
                    <img class="absolute text-blue-600 w-10 h-10" src="./images/video.png" alt="vedeo" />

                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Motion & Video editing</h3>
                <p class="mt-4 text-base text-gray-600">Our motion graphics and video services bring your brand to life with engaging and dynamic visual storytelling.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-gray-100" width="100" height="100" viewBox="0 0 65 70" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
                    </svg>
                    <img class="absolute text-blue-600 w-10 h-10" src="./images/software.png" alt="software" />

                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Software Development</h3>
                <p class="mt-4 text-base text-gray-600">From concept to deployment, we deliver custom software solutions that address your unique business challenges.</p>
            </div>

            <div>
                <div class="relative flex items-center justify-center mx-auto">
                    <svg class="text-yellow-100" width="100" height="100" viewBox="0 0 78 78" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.49996 28.0002C4.09993 47.9554 14.1313 66.7885 35.5 71.5002C56.8688 76.2119 68.0999 58.4553 72.5 38.5001C76.9 18.5449 68.3688 12.711 47 7.99931C25.6312 3.28759 12.9 8.04499 8.49996 28.0002Z" />
                    </svg>
                    <img class="absolute text-blue-600 w-10 h-10" src="./images/conseltant.png" alt="consolting" />
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Consulting</h3>
                <p class="mt-4 text-base text-gray-600">Our expert consulting services guide businesses through digital transformation, technology adoption, and process optimization for long-term growth.</p>
            </div>
        </div>
    </div>
</section>
    )
}

export default Services