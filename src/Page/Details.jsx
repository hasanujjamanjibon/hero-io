import { useParams } from 'react-router';
import ContextWrapper from '../provider/ContextWrapper';
import BarCharts from '../components/BarCharts';
import { useEffect, useState } from 'react';
import DetailsSkeltonLoader from '../components/SkeltonComponents/DetailsSkeltonLoader';

const Details = () => {
  const { apps, handleAddData, installed, setInstalled, storedData } =
    ContextWrapper();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const {
    image,
    title,
    companyName,
    id: appId,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = apps?.find((app) => app.id == id) || {};

  useEffect(() => {
    setTimeout(() => {
      const match = storedData.includes(Number(id));
      if (match) {
        setInstalled(true);
      } else {
        setInstalled(false);
      }
      setIsLoading(false);
    }, 1000);
  }, [storedData, id, setInstalled]);

  if (isLoading) {
    return <DetailsSkeltonLoader />;
  }
  return (
    <div className='min-h-screen py-10'>
      <div className='container'>
        {/* Header */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-6'>
          {/* Icon */}
          <div className='w-40 h-40 md:w-56 md:h-56 bg-white p-4 flex items-center justify-center'>
            <span className='text-3xl'>
              <img src={image} alt={title} />
            </span>
          </div>

          {/* Info */}
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-xl md:text-2xl font-semibold'>{title}</h1>
            <p className='text-sm text-gray-500 mt-1'>
              Developed by <span className='text-blue-500'>{companyName}</span>
            </p>
            <div className='h-0.5 bg-gray-200 my-6'></div>
            {/* Stats */}
            <div className='flex flex-wrap justify-center md:justify-start gap-12 mt-4 text-center'>
              <div className='space-y-1'>
                <img
                  className='h-10 w-10 mx-auto'
                  src='/assets/icon-downloads.png'
                  alt='Downloads'
                />
                <p className='text-sm text-gray-500'>Downloads</p>
                <p className='font-extrabold text-4xl'>
                  {' '}
                  {downloads >= 1000000
                    ? `${downloads / 1000000}M`
                    : `${Math.floor(downloads / 1000)}K`}
                </p>
              </div>

              <div className='space-y-1'>
                <img
                  className='h-10 w-10 mx-auto'
                  src='/assets/icon-ratings.png'
                  alt='Average Ratings'
                />
                <p className='text-sm text-gray-500'>Average Ratings</p>
                <p className='font-extrabold text-4xl'>{ratingAvg}</p>
              </div>

              <div className='space-y-1'>
                <img
                  className='h-10 w-10 mx-auto'
                  src='/assets/icon-review.png'
                  alt='Total Reviews'
                />
                <p className='text-sm text-gray-500'>Total Reviews</p>
                <p className='font-extrabold text-4xl'>
                  {reviews >= 1000000
                    ? `${reviews / 1000000}M`
                    : `${Math.floor(reviews / 1000)}K`}
                </p>
              </div>
            </div>
            {/* Button */}
            <button
              onClick={() => handleAddData(appId)}
              disabled={installed == true}
              className={`mt-4 text-white px-4 py-2 rounded-lg ${isLoading || installed ? 'bg-gray-400 !cursor-not-allowed' : 'bg-green-400 hover:bg-green-500 transition-all duration-300 hover:scale-90 '}`}
            >
              {isLoading || installed
                ? 'Installed'
                : `Install Now (${size || 0} MB)`}
            </button>
          </div>
        </div>

        {/* Ratings */}
        <div className='mt-8'>
          <BarCharts ratings={ratings} />
        </div>

        {/* Description */}
        <div className='mt-8'>
          <h2 className='font-semibold text-2xl mb-2'>Description</h2>
          <p className='text-base text-gray-600 '>
            {description?.map((text, index) => (
              <span key={index}>
                {text.text}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
