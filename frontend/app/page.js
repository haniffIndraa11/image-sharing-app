import Image from "next/image";

export default function Home() {
  return (
    <section className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
    </section>
  );
}
