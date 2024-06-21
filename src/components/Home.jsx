
import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import Container from './container/Container';
import PostCard from './PostCard';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    // if (posts.length === 0) {
    //     return (
    //         <div className="w-full py-8 mt-4 text-center">
    //             {/* <Container> */}
    //                 <div className="flex flex-wrap">
    //                     <div className="w-full p-2">
    //                         <h1 className="text-2xl font-bold hover:text-gray-500">
    //                             Login to read posts
    //                         </h1>
    //                     </div>
    //                 </div>
    //             {/* </Container> */}
    //         </div>
    //     )
    // }
    return (
        <div className='w-full py-8'>
            {/* <Container> */}
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='w-1/4 p-2'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            {/* </Container> */}
        </div>
    )
}

export default Home