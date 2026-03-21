import { Link } from 'react-router';
import ContextWrapper from '../../provider/ContextWrapper';
import AppCard from '../AppCard';
import BtnShowAll from '../BtnShowAll';
import { useState } from 'react';
import SkeletonCard from '../SkeltonComponents/SkeletonCard';

const TrendingSection = () => {
  const { apps, loading } = ContextWrapper();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className='text-center my-12 px-4  md:px-8 lg:px-16 space-y-4'>
        {/* Title */}
        <h2 className='text-4xl md:text-5xl font-bold text-[#001d3d] '>
          Trending Apps
        </h2>

        {/* Subtitle */}
        <p className='text-slate-500 text-sm md:text-base lg:text-lg'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 place-items-center'>
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : apps
              ?.sort((a, b) => b.ratingAvg - a.ratingAvg)
              ?.slice(0, 8)
              ?.map((app) => (
                <AppCard
                  key={app.id}
                  app={app}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                />
              ))}
      </div>
      <div className='text-center my-8 flex justify-center'>
        <Link to={'/apps'}>
          <BtnShowAll />
        </Link>
      </div>
    </>
  );
};

export default TrendingSection;
