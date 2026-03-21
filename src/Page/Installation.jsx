import { useEffect, useState } from 'react';
import InstalledCard from '../components/InstalledCard';
import InstalledAppsSkeltonLoader from '../components/SkeltonComponents/InstalledAppsSkeltonLoader';
import ContextWrapper from '../provider/ContextWrapper';
import AppNotFoundPage from './AppNotFoundPage';
import NotInstalledUI from '../components/NotInstalledUI';

const Installation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { storedData, apps } = ContextWrapper();
  const [filteredData, setFilteredData] = useState(storedData);

  const handleSortBySize = (order) => {
    const sortedData = [...filteredData].sort((a, b) => {
      console.log(a.size);
      console.log(b.size);

      if (order === 'Low - high') {
        return a.downloads - b.downloads;
      } else {
        return b.downloads - a.downloads;
      }
    });
    setFilteredData(sortedData);
  };

  useEffect(() => {
    setTimeout(() => {
      const savedIds = JSON.parse(localStorage.getItem('installedApps'));
      const filtered = apps?.filter((app) => savedIds?.includes(app?.id));
      setFilteredData(filtered);
      setIsLoading(false);
    }, 1000);
  }, [apps, storedData]);

  return (
    <div className='py-12'>
      <div className={`text-center mb-12 px-4  md:px-8 lg:px-16 space-y-4 `}>
        {/* Title */}
        <h2 className='text-4xl md:text-5xl font-bold text-[#001d3d] '>
          Your Installed Apps
        </h2>

        {/* Subtitle */}
        <p className='text-slate-500 text-sm md:text-base lg:text-lg'>
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className={`flex justify-between items-center container`}>
        <h3 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>
          {filteredData?.length || 0} Apps Found
        </h3>
        <select
          defaultValue='Sort By Size'
          onChange={(e) => handleSortBySize(e.target.value)}
          className='select appearance-none w-fit focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md border border-gray-300  py-2 text-sm text-gray-700'
        >
          <option disabled={true}>Sort By Size</option>
          <option value={'Low - high'}>Low - High</option>
          <option value={'High - low'}>High - Low</option>
        </select>
      </div>
      <div className='container space-y-4'>
        {isLoading ? (
          <div className='space-y-4 py-6'>
            {[1, 2, 3, 4, 5].map((n) => (
              <InstalledAppsSkeltonLoader key={n} />
            ))}
          </div>
        ) : filteredData.length > 0 ? (
          filteredData?.map((app) => (
            <InstalledCard key={app.id} appId={app.id} app={app} />
          ))
        ) : (
          <NotInstalledUI />
        )}
      </div>
    </div>
  );
};

export default Installation;
