import TitleSection from '@/components/landing-page/title-section';
import { Button } from '@/components/ui/button';
import React from 'react';
import Banner from '../../../public/appBanner.png';
import Image from 'next/image';

type Props = {};

const Homepage = () => {
  return (
    <>
      <section
        className="mt-10 gap-4 overflow-hidden px-4 sm:flex sm:flex-col sm:px-6 md:items-center
          md:justify-center"
      >
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div
          className="mt-6 rounded-xl bg-white bg-gradient-to-r from-primary to-brand-primaryBlue
            p-[2px] sm:w-[300px]"
        >
          <Button
            variant="btn-secondary"
            className="w-full rounded-[10px] bg-background p-6 text-2xl"
          >
            Get Cypress Free
          </Button>
        </div>
        <div
          className="relative ml-[-50px] mt-[-40px] flex w-[750px] items-center justify-center
            sm:ml-0 sm:w-full md:mt-[-90px]"
        >
          <Image src={Banner} alt="Application Banner" />
          <div
            className="absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t
              dark:from-background"
          ></div>
        </div>
      </section>   
      <section className="relative">
        <div
          className="after:content[''] before:content[''] flex overflow-hidden before:absolute
            before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-20
            before:bg-gradient-to-r before:from-background before:to-transparent
            after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-20
            after:bg-gradient-to-l after:from-background after:to-transparent
            before:dark:from-brand-dark after:dark:from-brand-dark"
        ></div>
      </section>
    </>
  );
};

export default Homepage;
