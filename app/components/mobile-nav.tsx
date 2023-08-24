'use client';

import * as React from 'react';
import { Link } from '@remix-run/react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { siteConfig } from '~/config/site';
import { Icons } from '~/components/icons';
import { Button } from '~/components/ui/button';
import { ScrollArea } from '~/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  PlayCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Separator } from '~/components/ui/separator';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import Logo from '../assets/images/logo.svg';

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
export function MobileNav() {
  // const [open, setOpen] = React.useState(false);

  return (
    <div className='flex items-center w-full justify-between md:hidden'>
      <Link to="/" className="mr-6 flex items-center space-x-2 ">
        <div className="bg-white p-5 overflow-x-auto overflow-y-auto mt-14">
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <HiMenu className="h-5 w-5 fill-amber-400" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="pr-0">
          <div className="flex items-center justify-evenly flex-col">
            {/* <Icons.Logo className="mr-2 h-4 w-4" /> */}
            <div className="flex gap-5 text-primary font-bold pt-4">
              {siteConfig.langs.map((lang) => (
                <Link key={lang} to={lang === 'en' ? '/' : `/${lang}`}>
                  {lang}
                </Link>
              ))}
            </div>
            <Separator className="my-4" />
            {/* <span className="font-bold">{siteConfig.name}</span>
          <span className="font-bold">{siteConfig.name}</span>
        <span className="font-bold">{siteConfig.name}</span> */}
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)] pb-10 text-lg">
            <Link
              to="/"
              className="flex flex-col space-y-3 font-bold text-primary px-4"
            >
              Home
            </Link>
            <Separator className="my-5 mr-6" />
            {/* <div className="flex flex-col space-y-3 font-bold">Home</div> */}
            <Accordion type="single" collapsible>
              <AccordionItem value="tours" className="pb-4">
                <AccordionTrigger className="font-bold px-4">
                  Tours
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 py-1 px-4">
                    <Link to="/tours" className="text-lg">
                      Travel abroad
                    </Link>
                    <Link to="/tours" className="text-lg">
                      Tours in Azerbaijan
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              to="/services"
              className="flex flex-col space-y-3 font-bold mt-4 px-4"
            >
              Services
            </Link>
            <Separator className="my-5 mr-6" />
            <Accordion type="single" collapsible>
              <AccordionItem value="about" className="pb-4">
                <AccordionTrigger className="font-bold px-4">
                  About
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 py-1 px-4">
                    <Link to="/tours" className="text-lg">
                      About B&T
                    </Link>
                    <Link to="/tours" className="text-lg">
                      Contact Us
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <a
              href="https://wa.me/+994552009999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary h-10 px-4 py-2 flex items-center mt-5 justify-center text-secondary mx-5"
            >
              <FaWhatsapp className="h-6 w-6" />
              <p>+994 55 200 99 99</p>
            </a>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
