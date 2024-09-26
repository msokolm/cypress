import TitleSection from '@/components/landing-page/title-section';
import { Button } from '@/components/ui/button';
import React from 'react';
import Banner from '../../../public/appBanner.png';
import Image from 'next/image';

type Props = {};

const Homepage = () => {
  return (
    <section>
      <div className="mt-10 gap-4 overflow-hidden px-4 sm:flex sm:flex-col sm:px-6 md:items-center md:justify-center">
        <TitleSection
          pill="⭐ Tour workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div className="mt-6 rounded-xl bg-white bg-gradient-to-r from-primary to-brand-primaryBlue p-[2px] sm:w-[300px]">
          <Button
            variant="btn-secondary"
            className="w-full rounded-[10px] bg-background p-6 text-2xl"
          >
            Get Cypress Free
          </Button>
        </div>
      </div>
      <div className="relative ml-[-50px] mt-[-40px] flex w-[750px] items-center justify-center sm:ml-0 sm:w-full md:mt-[-90px]">
        <Image src={Banner} alt="Application Banner" />
        <div className="absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t dark:from-background"></div>
      </div>
    </section>
  );
};

export default Homepage;
