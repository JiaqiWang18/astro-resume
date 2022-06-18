const ProfileCard = ({ data }) => {
  const renderedSocials = data.socials.map((social) => (
    <div className="mx-2 cursor-pointer">
      <a href={social.fields.link}>
        <img src={social.fields.icon.fields.file.url} className="w-6"></img>
      </a>
    </div>
  ));

  return (
    <div className="bg-white rounded border-slate-200 border">
      <div className="mx-5 my-5 px-2 flex flex-col justify-center items-center">
        <img
          src={data.photo.fields.file.url}
          className="w-28 rounded-full"
        ></img>

        <div className="text-3xl mt-5 mb-2 font-medium text-center">
          {data.name}
        </div>
        <div className="text-gray-500 text-center">{data.title}</div>
        {(data.email || data.location) && (
          <div className=" border-b-2 w-full my-4" />
        )}
        {data.location && (
          <div className="text-sm mt-1 mb-2">
            <i class="fa-solid fa-location-dot mr-3 fa-lg"></i>
            {data.location}
          </div>
        )}
        {data.email && (
          <a href={`mailto:${data.email}`} className="text-sm mt-2">
            <i class="fa-solid fa-envelope mr-3 fa-lg"></i>
            <span className="text-blue-800">{data.email}</span>
          </a>
        )}
        <div className=" border-b-2 w-full my-4" />
        <div className="flex justify-center w-full">{renderedSocials}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
