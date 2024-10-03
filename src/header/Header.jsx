import React from "react";


function Header(){
    return (
        <header class="pb-6 bg-white lg:pb-0">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
                <a href="#" title="" class="flex">
                    <img class="w-auto h-8 lg:h-10" src="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/449625638_790701683270949_7470168558449010278_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5SDmwdaOeEYQ7kNvgE1Y7Sy&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=Ape92p_3aXHmCs6QMrIEwQw&oh=00_AYABDEZRypOftrqRhF2BFjA6n5xU1pp-DxIeo6sqT6lknA&oe=670492B6" alt="" />
                </a>
            </div>
            <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>

                <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home</a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Service </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contact </a>
            </div>

            <a href="#" title="" class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>
        </nav>

        <nav class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div class="flow-root">
                <div class="flex flex-col px-6 -my-2 space-y-1">
                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                </div>
            </div>

            <div class="px-6 mt-6">
                <a href="#" title="" class="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-950" role="button"> Get started now </a>
            </div>
        </nav>
    </div>
</header>
    )
}

export default Header