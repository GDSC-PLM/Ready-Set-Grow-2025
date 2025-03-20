export default function ActivityCard({ image, title, description, titleColor }) {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[200px] border-3 border-black rounded-4xl overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className={`text-xl font-bold mt-4 mb-2 ${titleColor}`}>{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}


