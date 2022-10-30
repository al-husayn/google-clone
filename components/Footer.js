import React from 'react'
import Image from 'next/image'
import drake from "../assets/ALDrake.png";


export default function Footer(){
    return (
      <footer className="flex items-center justify-center mt-56">
        <a
          href="https://al-drake.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500"
          >
          Made with ❤️ by{" AL Drake "}
          <span>
            <Image src={drake} alt="Drake photo" width={32} height={32} />
          </span>
        </a>
      </footer>
    );
}