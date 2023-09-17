import { Link, NavLink } from "@remix-run/react"
// import { usePathname } from 'next/navigation';

import { siteConfig } from "~/config/site"
import { cn } from "~/lib/utils"
import { Icons } from "~/components/icons"
import Logo from "../assets/images/logo.svg"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"
export function MainNav() {
  // const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex md:w-full md:justify-between">
      <Link to="/" className="mr-6 flex items-center space-x-2 ">
        <div className="mt-14 overflow-x-auto overflow-y-auto bg-white p-5">
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <NavLink
          to="/"
          className={cn(
            "header-link transition-colors hover:text-foreground/80"
            // pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Home
        </NavLink>
        <NavDropdown
          menuItems={[
            { label: "Travel abroad", href: "/abroad" },
            { label: "Tours in Azerbaijan", href: "/azerbaijan" },
          ]}
          menuName={"Tours"}
        />
        <NavLink
          to="/hello"
          className={cn(
            "header-link transition-colors hover:text-foreground/80"
            // pathname?.startsWith('/themes')
            //   ? 'text-foreground'
            //   : 'text-foreground/60',
          )}
        >
          Services
        </NavLink>
        <NavDropdown
          menuItems={[
            { label: "About the B&T", href: "/about" },
            { label: "Contact Us", href: "/contact" },
          ]}
          menuName={"About"}
        />
      </nav>
    </div>
  )
}

interface MenuItem {
  label: string
  href: string
}

interface NavDropdownProps {
  menuItems: MenuItem[]
  menuName: string
}

function NavDropdown({ menuItems, menuName }: NavDropdownProps) {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center rounded-sm bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {menuName}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-3 w-3 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-sm bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {menuItems.map((item) => (
              <div className="py-1 " key={item.href}>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={`${
                        active ? "bg-white text-black" : "text-black"
                      } group flex w-full items-center px-2 py-2 text-sm font-bold`}
                    >
                      {item.label}
                    </a>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
