import { Link } from '@remix-run/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { toast } from '~/components/ui/use-toast';
import { Input } from './ui/input';
import { PiPhoneCallFill } from 'react-icons/pi';
import { SearchIcon } from 'lucide-react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const FormSchema = z.object({
  issues: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
});

export function ContactMobile() {

  const {i18n} = useTranslation();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <>
          <div className="bg-red-500 w-36 h-64">SALAM</div>
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        </>
      ),
    });
  }
  return (
    <div className="flex items-center w-screen justify-between md:hidden flex-col">
      {/* <span className="absolute from-white bg-gradient-to-r w-full h-72" /> */}
      {/* <div>
        <img src={Banner} alt="Banner" className="h-72 object-cover"></img>
        <Label className="absolute">Contact Us</Label>
      </div> */}

      <div className="bg-[url('../assets/images/contact-banner.png')] opacity-100 bg- duration-300 bg-cover bg-center h-72 w-full text-6xl text-white font-semibold flex   items-center">
        <p className="text-black uppercase w-1/4 font-bold text-3xl p-12 flex mr-auto z-10">
          {t('contact us')}
        </p>
        <span className="absolute from-white bg-gradient-to-r w-full h-72" />
      </div>
      <p className="text-2xl font-bold my-10 text-start w-full px-2">Contact</p>
      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(onSubmit)}
          className="w-full px-2 space-y-6"
        >
          <FormField
            // control={form.control}
            name="issues"
            render={({ field }) => (
              <FormItem>
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
                    <SelectItem value="Common issues">Common issues</SelectItem>
                    <SelectItem value="Visa support">Visa support</SelectItem>
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
              <FormItem>
                <Input type="text" placeholder="Name" />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            // control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <Input
                  leftIcon={<SearchIcon className="h-5 w-5 text-primary" />}
                />
                {/* <Input
                    type="tel"
                    placeholder="Phone"
                    className="pl-12 pr-4"
                  /> */}

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full space-y-6" type="submit">
            Send request
          </Button>
        </form>
      </Form>
    </div>
  );
}
