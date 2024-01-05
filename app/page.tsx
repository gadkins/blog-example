import Image from "next/image"
import Link from "next/link"

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

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>👋🏻 Welcome!</PageHeaderHeading>
        <PageHeaderDescription>
          I'm an AI researcher, software engineer, and entrepreneur with more
          than 10 years experience building state-of-the-art systems and SaaS products.
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
    </div>
  )
}