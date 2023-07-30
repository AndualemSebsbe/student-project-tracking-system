import React, { useState } from 'react';
import Head from 'next/head';

import Image from 'next/image';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const ViewDetails = () => {
 

  return (
    // <Container>
    <div>
      <Head>
        <title>Student Project Tracking System</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className='bg-cover bg-center w-full h-96' style={{backgroundImage: "url('/capsule.png')"}}>
</div> */}
      <div className="text-center text-5xl text-blue-500 font-bold mt-24">
        Real Estate Management System
      </div>
      <div className="mt-12 flex gap-12 mx-12 mb-5">
        <div>
          <Image src="/capsule.png" alt="My Image" width={600} height={280} />
        </div>
        <div className="w-1/2">
          <div className="text-l font-serif">
            lorem ipsum is simply dummy text of the printing and typesetting
            industry. it has been the industrys standard dummy text ever since
            1500s.', lorem ipsum is simply dummy text of the printing and
            typesetting industry. it has been the industrys standard dummy text
            ever since 1500s.', lorem ipsum is simply dummy text of the printing
            and typesetting industry. it has been the industrys standard dummy
            text ever since 1500s.',
          </div>
          <div className="flex gap-4">
            <div className="w-48 h-12 text-center bg-blue-500 hover:bg-gray-700 text-white py-3 px-4 mt-3 rounded text-l">
              <a href="/CV.pdf" download className="text-white px-4 rounded ">
                Download
              </a>
            </div>
            <div>
              <div className="w-48 h-12 text-center bg-red-900 hover:bg-gray-700 text-white py-3 px-4 mt-3 rounded text-l">
                <a href="#" download className="text-white px-4 rounded ">
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* student */}
      <div className="text-center text-blue-500 font-bold text-4xl mt-12">
        Our Teams
      </div>
      <p className="text-center text-gray-500 mb-12 mt-3 text-xl">
        Meet the team that developed this ausome project
      </p>
      <div className="grid grid-cols-5 ml-12 mr-12 mb-48 gap-x-3 ">
        <div className="shadow-md  bg-gray-600 pb-6 w-70 font-serif">
          <div className="flex gap-2 mx-2 mt-3">
            <div>
              <Image
                src="/image-1.png"
                alt="My Image"
                width={65}
                height={250}
              />
            </div>
            <div className="font-bold text-gray-400 text-l">
              Andualem Sebsisbe
              <br />
              <span className="text-l">Fullstack developer</span>
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaLinkedin className="inline-block text-xl text-blue-500 cursor-pointer mx-2" />
              </a>{' '}
            </div>
            <div className="text-gray-400">
              https://www.linkedin.com/in/andualem-sebsbe-b00031227/
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaEnvelope className="inline-block text-xl cursor-pointer mx-2 text-blue-500" />
              </a>{' '}
            </div>
            <div className="text-gray-400">andu_sebsibe</div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaPhone className="inline-block text-xl cursor-pointer mx-2 text-blue-500" />
              </a>{' '}
            </div>
            <div className="text-gray-400">andu_sebsibe</div>
          </div>
        </div>
        <div className="shadow-md  bg-gray-600 pb-6 w-70 font-serif">
          <div className="flex gap-2 mx-2 mt-3">
            <div>
              <Image
                src="/image-2.png"
                alt="My Image"
                width={65}
                height={250}
              />
            </div>
            <div className="font-bold text-gray-400 text-l">
              Andualem Sebsisbe
              <br />
              <span className="text-l">Fullstack developer</span>
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaLinkedin className="inline-block text-xl text-blue-500 cursor-pointer mx-2" />
              </a>{' '}
            </div>
            <div className="text-gray-400">
              www.linkedin.com/in/andualem-sebisibe-1446789bs7
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaEnvelope className="inline-block text-xl cursor-pointer mx-2 text-blue-500" />
              </a>{' '}
            </div>
            <div className="text-gray-400">andu_sebsibe</div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaPhone className="inline-block text-xl cursor-pointer mx-2 text-blue-500" />
              </a>{' '}
            </div>
            <div className="text-gray-400">andu_sebsibe</div>
          </div>
        </div>
        <div className="shadow-md  bg-gray-600 pb-6 w-70 font-serif">
          <div className="flex gap-2 mx-2 mt-3">
            <div>
              <Image
                src="/image-5.png"
                alt="My Image"
                width={65}
                height={250}
              />
            </div>
            <div className="font-bold text-gray-400 text-l">
              Andualem Sebsisbe
              <br />
              <span className="text-l">Fullstack developer</span>
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaLinkedin className="inline-block text-xl text-blue-500 cursor-pointer mx-2" />
              </a>{' '}
            </div>
            <div className="text-gray-400">
              www.linkedin.com/in/andualem-sebisibe-1446789bs7
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaEnvelope className="inline-block text-xl cursor-pointer mx-2 text-blue-500" />
              </a>{' '}
            </div>
            <div className="text-gray-400">andu_sebsibe</div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaPhone className="inline-block text-xl cursor-pointer mx-2 text-blue-500" />
              </a>{' '}
            </div>
            <div className="text-gray-400">andu_sebsibe</div>
          </div>
        </div>
        <div className="shadow-md  bg-gray-600 pb-6 w-70 font-serif">
          <div className="flex gap-2 mx-2 mt-3">
            <div>
              <Image
                src="/image-2.png"
                alt="My Image"
                width={65}
                height={250}
              />
            </div>
            <div className="font-bold text-gray-400 text-l">
              Andualem Sebsisbe
              <br />
              <span className="text-l">Fullstack developer</span>
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaLinkedin className="inline-block text-xl text-blue-500 cursor-pointer mx-2" />
              </a>{' '}
            </div>
            <div className="text-gray-400">
              www.linkedin.com/in/andualem-sebisibe-1446789bs7
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaEnvelope className="inline-block text-xl cursor-pointer mx-2 text-blue-500" />
              </a>{' '}
            </div>
            <div className="text-gray-400">andu_sebsibe</div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaPhone className="inline-block text-xl cursor-pointer mx-2 text-blue-500" />
              </a>{' '}
            </div>
            <div className="text-gray-400">andu_sebsibe</div>
          </div>
        </div>
        <div className="shadow-md  bg-gray-600 pb-6 w-70 font-serif">
          <div className="flex gap-2 mx-2 mt-3">
            <div>
              <Image
                src="/image-1.png"
                alt="My Image"
                width={65}
                height={250}
              />
            </div>
            <div className="font-bold text-gray-400 text-l">
              Andualem Sebsisbe
              <br />
              <span className="text-l">Fullstack developer</span>
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaLinkedin className="inline-block text-xl text-blue-500 cursor-pointer mx-2" />
              </a>{' '}
            </div>
            <div className="text-gray-400">
              www.linkedin.com/in/andualem-sebisibe-1446789bs7
            </div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaEnvelope className="inline-block text-xl cursor-pointer mx-2 text-blue-500" />
              </a>{' '}
            </div>
            <div className="text-gray-400">andu_sebsibe</div>
          </div>
          <div className="flex mt-3">
            <div>
              <a href="">
                <FaPhone className="inline-block text-xl cursor-pointer mx-2 text-blue-500" />
              </a>{' '}
            </div>
            <div className="text-gray-400">andu_sebsibe</div>
          </div>
        </div>
      </div>      
    </div>
      
  );
};

export default ViewDetails;
