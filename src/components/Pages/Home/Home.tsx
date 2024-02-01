//import { useEffect, useState } from 'react';

/* Components */
import { Header } from 'src/components/Layout/Header/Header.tsx';
import { TileCarousel } from 'src/components/TileCarousel/TileCarousel.tsx';

import tileImage from 'src/assets/images/tiles/stranger-things.jpg';
import tileImage2 from 'src/assets/images/tiles/breaking-bad.jpg';
import tileImage3 from 'src/assets/images/tiles/the-boys.jpg';

import './Home.css';

const featuredData = [
  {
    title: 'Stranger Things',
    link: '/stranger-things',
    description: `Summer brings new jobs and budding romance.
    But the mood shifts when Dustin's radio picks up a russian broadcast, and Will senses something is wrong.`,
    background: tileImage,
  },
  {
    title: 'Breaking Bad',
    link: '/the-boy',
    description: `No real description tbh.`,
    background: tileImage2,
  },
  {
    title: 'The Boys',
    link: '/the-boys',
    description: `blah`,
    background: tileImage3,
  },
];

function Home() {
  return (
    <>
      <Header />
      <main>
        <section aria-roledescription="featured" aria-label="Featured Content">
          <TileCarousel tiles={featuredData} />
        </section>
      </main>
    </>
  );
}

export { Home };
