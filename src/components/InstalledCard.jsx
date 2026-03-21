import ContextWrapper from '../provider/ContextWrapper';

const InstalledCard = ({ app }) => {
  const { image, title, id, size, ratingAvg, downloads } = app || {};
  const { handleRemoveData } = ContextWrapper();
  return (
    <div className='flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 max-w-6xl mx-auto'>
      {/* Left Side: Image and Details */}
      <div className='flex items-center gap-4'>
        {/* Placeholder for App Icon */}
        <div className='w-20 h-20 bg-gray-100 rounded-sm shrink-0'>
          <img
            src={image}
            alt={title}
            className='h-full w-full object-cover rounded-md'
          />
        </div>

        <div className='flex flex-col gap-1'>
          {/* Title */}
          <h3 className='text-lg font-semibold text-slate-800 leading-tight'>
            {title}
          </h3>

          {/* Stats (Downloads, Rating, Size) */}
          <div className='flex items-center gap-3 text-xs md:text-sm text-emerald-500 font-medium'>
            <div className='flex items-center gap-1'>
              <img
                className='h-3 w-3 mx-auto'
                src='/assets/icon-downloads.png'
                alt='Downloads'
              />
              <span>
                {downloads >= 1000000
                  ? `${downloads / 1000000}M`
                  : `${Math.floor(downloads / 1000)}K`}
              </span>
            </div>

            <div className='flex items-center gap-1'>
              <img
                className='h-3 w-3 mx-auto'
                src='/assets/icon-ratings.png'
                alt='Average Ratings'
              />
              <span className='text-gray-600'>{ratingAvg}</span>
            </div>

            <div className='text-gray-500 font-normal'>{size} MB</div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => handleRemoveData(id)}
        className='bg-[#00D084] hover:bg-[#00ba76] text-white px-6 py-2 rounded-md font-medium text-sm md:text-base transition-colors duration-200 shadow-sm'
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledCard;
