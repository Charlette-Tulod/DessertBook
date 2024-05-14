import React from 'react';
import Banner from '../components/Banner';
import RecipeLists from '../components/RecipeLists';

const HomePage = () => {
  return (
    <>
      <Banner />
      <RecipeLists isMain={true} />
    </>
  );
};

export default HomePage;
