import { t } from 'i18next';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Input } from './ui/input';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';
import { IoLocation } from 'react-icons/io5';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTelegramPlane,
} from 'react-icons/fa';

export function ContactMain() {
  const form = useForm();
  return (
    <div className="hidden md:flex md:flex-col md:justify-between md:w-full items-center">
      <div className="bg-[url('../assets/images/contact-banner.png')] opacity-100 duration-300 bg-cover bg-center h-96 w-full text-6xl text-white font-semibold flex items-center">
        <p className="text-black uppercase w-full font-bold text-4xl p-12 pl-28 flex z-10 justify-center text-center">
          {t('contact us')}
        </p>
        <span className="absolute from-white bg-gradient-to-r w-full h-96" />
      </div>
      <div className="flex flex-row-reverse items-center max-w-screen-lg">
        <Form {...form}>
          <form
            // onSubmit={form.handleSubmit(onSubmit)}
            className="w-full px-5 space-y-6 text-black"
          >
            <div className="flex justify-between gap-5">
              <FormField
                // control={form.control}
                name="issues"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <Select
                      // onValueChange={field.onChange}
                      defaultValue="Common issues"
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent defaultValue="Common issues">
                        <SelectItem value="Common issues">
                          Common issues
                        </SelectItem>
                        <SelectItem value="Visa support">
                          Visa support
                        </SelectItem>
                        <SelectItem value="Airtickets">Airtickets</SelectItem>
                        <SelectItem value="Tourisms">Tourisms</SelectItem>
                        <SelectItem value="Complaint">Complaint</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                // control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <Input type="text" placeholder="Name" />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between gap-5">
              <FormField
                // control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <Input
                      placeholder="Phone"
                      leftIcon={
                        <FiPhoneCall className="h-5 w-5 text-primary" />
                      }
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                // control={form.control}
                name="e-mail"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <Input
                      placeholder="E-mail"
                      leftIcon={<FiMail className="h-5 w-5 text-primary" />}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Textarea placeholder="Message" />
            <Button className="w-full space-y-6" type="submit">
              Send request
            </Button>
          </form>
        </Form>
        <div className="text-black">
          <p className="text-2xl font-bold my-10 text-start w-full px-5 uppercase">
            Our Address
          </p>
          <div className="flex w-full flex-col gap-8">
            <span className="flex justify-start w-full gap-5 px-5 items-center">
              <IoLocation className="h-10 w-10 text-primary min-w-min" />
              <a href="https://goo.gl/maps/bXFhQFutRBwkWbCM7">
                Baku city, Aşıq Ali, 4, Narimanov, AZ1072 "Sheher Baghları"
                residence.
              </a>
            </span>
            <span className="flex justify-start w-full gap-5 px-5 items-center">
              <BiSolidPhoneCall className="h-10 w-10 text-primary min-w-min" />
              <a href="tel:+994502009999">+994 50 200 99 99</a>
            </span>
            <span className="flex justify-start w-full gap-5 px-5 items-center">
              <HiMail className="h-10 w-10 text-primary min-w-min" />
              <a href="mailto:email@example.com"> bookand.travel </a>
            </span>

            {/* Social icons */}
            <div className="flex gap-2 px-5">
              <a
                href="https://www.instagram.com/bookand.travel/"
                className="w-11 h-11 block transition-colors hover:text-foreground/80"
              >
                <FaInstagramSquare className="h-full w-full text-primary" />
              </a>

              <a
                href="https://www.facebook.com/bookand.travel.az"
                className="w-11 h-11 block transition-colors hover:text-foreground/80"
              >
                <FaFacebookSquare className="h-full w-full text-primary" />
              </a>

              <a
                href="/"
                className="w-11 h-11 block transition-colors hover:text-foreground/80"
              >
                <FaLinkedin className="h-full w-full text-primary" />
              </a>

              <a
                href="/"
                className="w-11 h-11 block transition-colors hover:text-foreground/80"
              >
                <FaTelegramPlane className="h-full w-full text-primary" />
              </a>
            </div>

            {/* Embed map */}

            <iframe
              className="flex justify-center items-center mx-5 border-8 rounded-md border-black h-48 mb-16"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.377387181705!2d49.86039777653565!3d40.4004897566268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d7b4b318c95%3A0xdaeaee8247875e7!2zxZ7JmWjJmXIgQmHEn2xhcsSx!5e0!3m2!1sen!2saz!4v1694369965343!5m2!1sen!2saz"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
