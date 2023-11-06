
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## FE mock 

msw解决了模拟接口请求, faker制造假数据

1. [faker](https://fakerjs.dev/api/finance.html)
2. [msw](https://mswjs.io/docs/api/setup-worker/)

### browser
```js
useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === "development") {
      import("@/mocks/browser").then(res => {
          res?.worker.start()
          setWorker(res?.worker)
        })
    }
  }, []);
```

### mws node 支持 next.js App
https://github.com/mswjs/msw/issues/1644

## TODO：搞单测 

> 建议： 1. 负责逻辑 2. 公用工具 3.不方便调试逻辑
