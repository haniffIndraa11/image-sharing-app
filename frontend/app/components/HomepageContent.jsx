import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const HomepageContent = ({ api }) => {
    return (
        <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 px-4">
            {api.images?.map((content) => {
                const correctedImageUrl = content.image_url.startsWith('/') ? content.image_url : `/${content.image_url.replace(/\\/g, '/')}`;           
                return (
                    <Link href={`/images/${content.id}`} key={content.id} className="card bg-base-100 shadow-xl hover:bg-slate-200 mt-4 p-2 mb-2">
                        <div className=" p-2 shadow transition-all cursor-pointer transform group-hover:scale-105 duration-300">
                            <Image
                                src={correctedImageUrl}
                                width={300}
                                height={300}
                                alt="image"
                                className="rounded p-2"
                            />
                        </div>
                        <h2 className="card-body border">{content.caption}</h2>
                    </Link>
                );
            })}
        </div>
    );
}

export default HomepageContent;
