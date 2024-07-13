"use client"

import { useEffect, useState } from "react";
import { getAllImages } from "@/libs/fetch/fetchImage";
import HomepageContent from "./components/HomepageContent";

export default function Home() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllImages();
        console.log(`Images Data: `, data)
        setImageData(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchData();
  }, [])

  return (
    <>
      <div>
        <HomepageContent api={imageData} />
      </div>
    </>
  );
}


{/* <section className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="abstract-art" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="valorant-poster" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="pixel-art" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="music-poster" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="bear-image" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="tree-landscape" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="anime-character" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="snorlax" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="smoking-poster" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="racing-driver" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="cyberpunk-character" className="rounded-lg shadow-lg" />
<Image src="https://via.placeholder.com/300" width={300} height={300} alt="robot" className="rounded-lg shadow-lg" />
</section> */}