import React from "react";
import "./Dashboard.css";
import mypic from "../utils/my-pic.jpg";
import OverviewGraph from "./Charts/OverviewGraph";
import PieChartType2 from "./Charts/PieChartType2";

const Dashboard1 = () => {
  return (
    <div>
      {/* radial-gradient(at center top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39)) */}
      {/* bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 */}
      <main class="relative bg-gray-100 dark:bg-gray-200 sm:shadow-none">
        <div class="  flex flex-row items-start">
          {/* left Panel */}
          <aside>
            <div class=" relative hidden h-screen  shadow-lg lg:block w-80">
              <div class=" height-full width-sidebar  bg-white bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900">
                <div class="  flex items-center justify-center pt-6">
                  <svg
                    width="35"
                    height="30"
                    viewBox="0 0 256 366"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                  >
                    <defs>
                      <linearGradient
                        x1="12.5189534%"
                        y1="85.2128611%"
                        x2="88.2282959%"
                        y2="10.0225497%"
                        id="linearGradient-1"
                      >
                        <stop
                          stop-color="#FF0057"
                          stop-opacity="0.16"
                          offset="0%"
                        ></stop>
                        <stop stop-color="#FF0057" offset="86.1354%"></stop>
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
                        fill="#001B38"
                      ></path>
                      <circle
                        fill="url(#linearGradient-1)"
                        transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                        cx="147.013244"
                        cy="147.014675"
                        r="78.9933938"
                      ></circle>
                      <circle
                        fill="url(#linearGradient-1)"
                        opacity="0.5"
                        transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                        cx="147.013244"
                        cy="147.014675"
                        r="78.9933938"
                      ></circle>
                    </g>
                  </svg>
                </div>

                {/* sidebar-Nav */}
                <nav relative class="mt-6">
                  <div class="flex flex-col justify-between">
                    <div>
                      <a
                        class="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 2048 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                          </svg>
                        </span>
                        <span class="mx-4 text-sm font-normal">Dashboard</span>
                      </a>
                      <a
                        class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                          </svg>
                        </span>
                        <span class="mx-4 text-sm font-normal">Products</span>
                      </a>
                      <a
                        class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                          </svg>
                        </span>
                        <span class="mx-4 text-sm font-normal">Customers</span>
                      </a>
                      <a
                        class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z" />
                          </svg>
                        </span>
                        <span class="mx-4 text-sm font-normal">Income</span>
                      </a>
                      <a
                        class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.93 1.31a41.401 41.401 0 0110.14 0C16.194 1.45 17 2.414 17 3.517V18.25a.75.75 0 01-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 01-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 013 18.25V3.517c0-1.103.806-2.068 1.93-2.207zm8.85 5.97a.75.75 0 00-1.06-1.06l-6.5 6.5a.75.75 0 101.06 1.06l6.5-6.5zM9 8a1 1 0 11-2 0 1 1 0 012 0zm3 5a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span class="mx-4 text-sm font-normal">Promote</span>
                      </a>
                      <a
                        class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span class="mx-4 text-sm font-normal">Help</span>
                      </a>
                      <a
                        class="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            width="20"
                            fill="currentColor"
                            height="20"
                            class="w-5 h-5"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                          </svg>
                        </span>
                        <span class="mx-4 text-sm font-normal">Settings</span>
                      </a>
                    </div>

                    <div class="absolute bottom-5 left-2.5">
                      <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-300 opacity-0.25 py-2 px-5">
                        <div class="flex-row gap-4 flex justify-center items-center">
                          <div class="flex-shrink-0">
                            <a href="#" class="relative block">
                              <img
                                alt="mypic"
                                src={mypic}
                                class="mx-auto object-cover rounded-full h-16 w-16 "
                              />
                            </a>
                          </div>
                          <div class=" flex flex-col">
                            <span class="text-lg font-medium semi-bold text-gray-600 dark:text-black">
                              Husain Jafri
                            </span>
                            <span class="text-xs text-gray-500">
                              Full Stack Developer
                            </span>
                          </div>
                          <button
                            type="button"
                            class="py-2 opacity-0.25 hover:opacity-1 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </aside>
          {/* Right Panel */}
          
          <div class=" relative right-panel max-h-[100%]">
            <div class="flex right-panel overflow-y-auto  flex-col h-[calc(100vh-4rem)]   bg-gray-200 ">
                {/* Header part */}
              <header class="z-40 sticky  top-0  items-center w-full h-20 py-5 shadow-lg dark:bg-gray-200 ">
                {/*  */}
                <div class="relative z-20 flex flex-col justify-center  h-full px-3 mx-auto flex-center">
                  <div class="flex flex-row justify-between items-center">
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-8 h-8 mr-2 text-yellow-800 dark:text-yellow"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 1a2 2 0 00-2 2v2.365l-3-1.5-3 1.5V3a2 2 0 00-4 0v14a1 1 0 001 1h9a1 1 0 001-1V3a2 2 0 00-2-2zM6 17H4a1 1 0 010-2h2a1 1 0 010 2zm2-4a1 1 0 00-1 1v2.795l1-.5 1 .5V14a1 1 0 00-1-1zm-2 0a1 1 0 00-1 1v2.295l1-.5 1 .5V14a1 1 0 00-1-1zm7 2a1 1 0 010 2h-2a1 1 0 010-2h2zm0-4a1 1 0 010 2H6a1 1 0 010-2h7zm4-4H6a1 1 0 000 2h11a1 1 0 000-2z"
                          clipRule="evenodd"
                        />
                        
                      </svg>
                      <h1 className="text-1xl sm:text-2xl mr-2  font-semibold text-gray-800 dark:text-black ">
                        Hello ShahRukh !
                      </h1>
                    </div>

                    <div className="relative flex flex-row justify-end items-center">
                      <div className="relative ">
                        <input
                          type="text"
                          placeholder="Search"
                          className="w-40 md:w-56 mr-2 h-8 md:h-10 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-6 h-6 text-gray-400 absolute left-3 top-2.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.293 10.293a6 6 0 107.414 7.414l5.586 5.586a1 1 0 01-1.414 0l-5.586-5.586a6 6 0 00-7.414-7.414L0 10l2.293-2.293a6 6 0 007.414-7.414l5.586-5.586a1 1 0 010 1.414l-5.586 5.586a6 6 0 00-7.414 7.414L10 20l-2.293-2.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="relative flex items-center  p-1  mr-4 sm:mr-0 sm:right-auto">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src={mypic}
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </header>
              {/* Header part finished */}

              {/* Chart progress to be check */}
              {/* part 1 start */}
              <div class="flex flex-no-wrap justify-center md:justify-evenly items-center flex-col md:flex-row sm:flex-wrap md:flex-no-wrap mr-2 ml-2 mt-6">
                <div class="p-4 bg-white h-52 flex flex-row mb-2 md:mb-0 justify-center shadow-lg rounded-md dark:bg-white-800">
                  <div class="flex mr-5 items-center">
                    <span class="relative p-20 bg-green-200 rounded-full">
                      <svg
                        width="40"
                        fill="currentColor"
                        height="40"
                        class="absolute h-10 text-green-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                      </svg>
                    </span>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class=" text-black text-md dark:text-gray-400">
                      Earnings
                    </p>
                    <p class=" text-4xl font-bold text-left text-gray-700 dark:text-black-100">
                    $128k
                      
                    </p>
                    <div class="flex items-center text-sm text-green-500">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                      </svg>
                      <span>5.5%</span>
                      <span class="text-gray-400">vs last month</span>
                    </div>
                  </div>
                </div>

                <div class="p-4 bg-white h-52 flex flex-row mb-2 justify-center shadow-lg rounded-md dark:bg-white-800">
                  <div class="flex mr-5 items-center">
                    <span class="relative p-20 bg-purple-200 rounded-full">
                    <svg  width="40"
                        fill="currentColor"
                        height="40"
                        class="absolute h-10 text-purple-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z"/>
  </svg>
                    </span>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class=" text-black text-md dark:text-gray-400">
                      Orders
                    </p>
                    <p class=" text-4xl font-bold text-left text-gray-700 dark:text-black-100">
                      $2.40k
                    
                    </p>
                    <div class="flex items-center text-sm text-red-500">
                    <svg class="w-[10px] h-[10px] text-red-350 dark:text-red" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
  </svg>
                      <span>03.2%</span>
                      <span class="text-gray-400"> vs last month</span>
                    </div>
                  </div>
                </div>
                <div class="p-4 bg-white h-52 flex flex-row mb-2 justify-center shadow-lg rounded-md dark:bg-white-800">
                  <div class="flex mr-5 items-center">
                    <span class="relative p-20 bg-blue-200 rounded-full">
                    <svg width="40"
                        fill="currentColor"
                        height="40"
                        class="absolute h-10 text-blue-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z"/>
  </svg>
                    </span>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class=" text-black text-md dark:text-gray-400">
                     Balance
                    </p>
                    <p class=" text-4xl font-bold text-left text-gray-700 dark:text-black-100">
                      $2.40k
                      
                    </p>
                    <div class="flex items-center text-sm text-red-500">
                    <svg class="w-[10px] h-[10px] text-red-350 dark:text-red" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
  </svg>
                      <span>05.5%</span>
                      <span class="text-gray-400">vs last month</span>
                    </div>
                  </div>
                </div>
                <div class="p-4 bg-white h-52 flex flex-row mb-2 justify-center shadow-lg rounded-md dark:bg-white-800">
                  <div class="flex mr-5 items-center">
                    <span class="relative p-20 bg-pink-200 rounded-full">
                    <svg width="40"
                        fill="currentColor"
                        height="40"
                        class="absolute h-10 text-pink-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"/>
  </svg>
                    </span>
                  </div>
                  <div class="flex flex-col justify-center">
                    <p class=" text-black text-md dark:text-gray-400">
                      Total Sales
                    </p>
                    <p class=" text-4xl font-bold text-left text-gray-700 dark:text-black-100">
                      $89k
                      
                    </p>
                    <div class="flex items-center text-sm text-green-500">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                      </svg>
                      <span>11%</span>
                      <span class="text-gray-400"> in this month</span>
                    </div>
                  </div>
                </div>
                
              </div>
              {/* part1 done */}

              {/* Part 2 Start */}
              <div class="flex p-0 lg:pd-4 w-full h-full pb-0 lg:pb-5 flex-col md:flex-row justify-center md:justify-evenly">
                {/* graph OverView */}
                <OverviewGraph />
                <PieChartType2 />
                {/* PieChart */}
              </div>
              {/* part 2 End */}


            </div>
          </div>
          {/* Right */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard1;
