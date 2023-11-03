"use client"
import { useCallback, type FC, useState, useEffect } from 'react';
import { Button, Space } from '@arco-design/web-react';
import axios from "axios"

interface PostsProps {}

const Posts: FC<PostsProps> = () => {
    const [data1, setData1 ] = useState<any>();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log("process.env.NEXT_PUBLIC_API_MOCKING:", process.env.NEXT_PUBLIC_API_MOCKING)
            // if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
                import("@/mocks/browser").then(res => {
                    res?.worker.start()
                })  
            // }
        }
      }, []);

    const createdFetch = useCallback(() => {
        axios.get("/api/posts").then(({data}) => {
            setData1(data);
        })
    }, [])

    const postFetch = useCallback(() => {
        axios.post("/api/posts", {id: parseInt(Math.random()*10 + '')}).then(({data}) => {
            setData1(data);
        })
    }, [])

    const deleteFetch = useCallback(() => {
        axios.delete("/api/posts/2").then(({data}) => {
            setData1(data);
        })
    }, [])

    return <Space size='large'>
    <Button type='primary' onClick={createdFetch}>查看一下</Button>
    <Button type='secondary' onClick={postFetch}>添加</Button>
    <Button type='dashed' onClick={deleteFetch}>删除</Button>
    {JSON.stringify(data1)}
  </Space>;
}

export default Posts;
