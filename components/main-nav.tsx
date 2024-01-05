"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Fine-tuning",
    href: "/docs/use-cases/development",
    description:
      "Chat and instruction fine-tuning",
  },
  {
    title: "Mixture of Experts",
    href: "/docs/use-cases/testing",
    description:
      "Detailed walkthrough",
  },
  {
    title: "Prompt Engineering",
    href: "/docs/use-cases/pull-requests",
    description:
      "Preview PRs before merging",
  },
  {
    title: "Research",
    href: "/docs/use-cases/staging",
    description: "Isolated, on-demand staging environments",
  },
]

export function MainNav() {
  const pathname = usePathname()
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="https://uffizzi.com" target="_blank"
                    >
                      <Icons.logo className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Uffizzi
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Software platform for building developer portals
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="AI/ML">
                  Selected projects in LLMs, NLP, and Computer Vision.
                </ListItem>
                <ListItem href="/docs/installation" title="DevOps/MLOps">
                  How to install Uffizzi to create self-serve environments.
                </ListItem>
                <ListItem href="/docs/quickstart" title="UI/UX Design">
                  Create your first environment in less than 5 minutes.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Artificial Intelligence</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://uffizzi.com/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div >
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


// export function MainNav() {
//   const pathname = usePathname()

//   return (
//     <div className="mr-4 hidden md:flex">
//       <Link href="/" className="mr-6 flex items-center space-x-2">
//         <Icons.logo className="h-6 w-6" />
//         <span className="hidden font-bold sm:inline-block">
//           {siteConfig.name}
//         </span>
//       </Link>
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//       <nav className="flex items-center space-x-6 text-sm font-medium">
//         <Link
//           href="/docs"
//           className={cn(
//             "transition-colors hover:text-foreground/80",
//             pathname === "/docs" ? "text-foreground" : "text-foreground/60"
//           )}
//         >
//           Documentation
//         </Link>
//         <Link
//           href="/docs/components"
//           className={cn(
//             "transition-colors hover:text-foreground/80",
//             pathname?.startsWith("/docs/components")
//               ? "text-foreground"
//               : "text-foreground/60"
//           )}
//         >
//           Components
//         </Link>
//         <Link
//           href="/themes"
//           className={cn(
//             "transition-colors hover:text-foreground/80",
//             pathname?.startsWith("/themes")
//               ? "text-foreground"
//               : "text-foreground/60"
//           )}
//         >
//           Themes
//         </Link>
//         <Link
//           href="/examples"
//           className={cn(
//             "transition-colors hover:text-foreground/80",
//             pathname?.startsWith("/examples")
//               ? "text-foreground"
//               : "text-foreground/60"
//           )}
//         >
//           Examples
//         </Link>
//         <Link
//           href={siteConfig.links.uffizzi}
//           className={cn(
//             "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
//           )}
//         >
//           Uffizzi
//         </Link>
//       </nav>
//     </div>
//   )
// }
