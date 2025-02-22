import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Spinner from '../components/Spinner';

const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or component loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate 1 second loading

    return () => clearTimeout(timer); // Cleanup function
  }, []);


  return (
    <div>
      {loading ? (
        <Spinner /> // Show spinner when loading
      ) : (
        <>
          <Hero />
          <LatestCollection />
          <BestSeller />
          <OurPolicy />
          <NewsletterBox />
        </>
      )}
    </div>
  )
}

export default Home