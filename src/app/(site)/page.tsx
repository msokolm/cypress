import TitleSection from '@/components/landing-page/title-section';
import React from 'react';

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

          <Button>
            
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
