import Image from "next/image"
import Link from "next/link"
import Date from '@/components/data'
import utilStyles from './utils.module.scss'
import { Inter } from 'next/font/google'

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ChatMenu } from "@/components/chat-menu"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/components/ui/button"

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

const inter = Inter({ subsets: ['latin'] })

export default function IndexPage() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <div className="container relative">
        <PageHeader>
          <Image
            priority
            src='/images/profile.png'
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=''
          />
          <PageHeaderHeading className={utilStyles.heading2Xl}>👋🏻 Hi, I'm {siteConfig.fname}!</PageHeaderHeading>
          <PageHeaderDescription>
            I'm an AI researcher, software engineer, and entrepreneur with more
            than 10 years experience building state-of-the-art machine learning
            systems and software products.

            My passion is productizing fundamental research in machine learning,
            rapidly prototyping proof-of-concepts, and building products that solve real
            problems.
          </PageHeaderDescription>
          <PageActions>
            {/* <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link> */}
            <ChatMenu />
          </PageActions>
        </PageHeader>
        <section className={`${utilStyles.headingMd} text-gray-600`}>
          <p>
            Hello, I&apos;m <b>Grayson</b>. I&apos;m a software engineer in love
            with front end development. You can contact me on{' '}
            <a href='https://www.linkedin.com/in/emanuele-favero/'>Linkedin</a>.
          </p>
          <p>
            <i>
              Check out my projects on{' '}
              <a target='_blank' href='https://github.com/emanuelefavero'>
                GitHub
              </a>{' '}
            </i>
          </p>
          <p>(This is a Next.js sample website)</p>
          <h3>Posts</h3>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <div className='font-medium mb-1 mt-5'>
                  <Link href={`/posts/${id}`}>{title}</Link>
                </div>
                {/* <br /> */}
                <small className='text-gray-500 font-medium'>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}