import * as React from 'react';
import { Link, NavLink } from '@remix-run/react';
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import i18n from '~/i18n';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

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

  const {i18n} = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="flex items-center w-full justify-between md:hidden">
      <NavLink to="/" className="flex items-center space-x-2 header-link">
        <div className="bg-white p-1 overflow-x-auto overflow-y-auto mt-5">
          <img src={Logo} alt="Logo" className="w-20" />
        </div>
      </NavLink>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <HiMenu className="h-5 w-5 fill-amber-400" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="pr-0 bg-black text-white">
          <div className="flex items-center justify-evenly flex-col">
            {/* <Icons.Logo className="mr-2 h-4 w-4" /> */}
            <div className="flex gap-5 font-bold pt-4 text-black">
              <Select onValueChange={changeLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="Language"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Language</SelectLabel> */}
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="az">Azerbaijani</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Separator className="my-4" />
            {/* <span className="font-bold">{siteConfig.name}</span>
          <span className="font-bold">{siteConfig.name}</span>
        <span className="font-bold">{siteConfig.name}</span> */}
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)] pb-10 text-lg bg-black text-white">
            <NavLink
              to="/"
              className="flex flex-col space-y-3 font-bold px-4 header-link"
            >
              Home
            </NavLink>
            <Separator className="my-5 mr-6" />
            {/* <div className="flex flex-col space-y-3 font-bold">Home</div> */}
            <Accordion type="single" collapsible>
              <AccordionItem value="tours" className="pb-4">
                <AccordionTrigger className="font-bold px-4">
                  Tours
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 py-1 px-4">
                    <NavLink to="/tours" className="text-lg header-link">
                      Travel abroad
                    </NavLink>
                    <NavLink to="/tours" className="text-lg header-link">
                      Tours in Azerbaijan
                    </NavLink>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <NavLink
              to="/services"
              className="flex flex-col space-y-3 font-bold mt-4 px-4"
            >
              Services
            </NavLink>
            <Separator className="my-5 mr-6" />
            <Accordion type="single" collapsible>
              <AccordionItem value="about" className="pb-4">
                <AccordionTrigger className="font-bold px-4">
                  About
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 py-1 px-4">
                    <NavLink to="/tours" className="text-lg">
                      About B&T
                    </NavLink>
                    <NavLink to="/contact" className="text-lg header-link">
                      Contact Us
                    </NavLink>
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
              <FaWhatsapp className="h-6 w-6 text-black" />
              <p className="text-black">+994 55 200 99 99</p>
            </a>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
