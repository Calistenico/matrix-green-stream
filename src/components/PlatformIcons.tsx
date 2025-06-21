
const PlatformIcons = () => {
  const platforms = [
    { name: 'Paramount+', color: 'bg-blue-600', text: 'Paramount+' },
    { name: 'Prime Video', color: 'bg-blue-900', text: 'prime video' },
    { name: 'Star+', color: 'bg-purple-800', text: 'ST⭐R +' },
    { name: 'HBO Max', color: 'bg-purple-900', text: 'HBO max' },
    { name: 'Netflix', color: 'bg-white text-black', text: 'NETFLIX' }
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`${platform.color} rounded-lg h-24 flex items-center justify-center font-bold text-lg hover:scale-105 transition-transform cursor-pointer`}
            >
              {platform.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformIcons;
