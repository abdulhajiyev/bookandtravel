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
    </div>
  );
}
