import { ContactMain } from '~/components/contact-main';
import { ContactMobile } from '~/components/contact-mobile';
export default function Contact() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 w-full border-b backdrop-blur transition-all">
      <div className="flex items-center flex-row-reverse md:flex-row">
        <ContactMain />
        <ContactMobile />
      </div>
    </div>
  );
} 
