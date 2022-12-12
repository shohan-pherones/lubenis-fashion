const GetInTouch = () => {
  return (
    <div className="get-in-touch container mx-auto py-20 flex flex-col gap-10">
      <div className="top flex gap-10">
        <span className="text-7xl uppercase font-semibold flex-1">
          Get in touch
        </span>
        <div className="flex gap-5 flex-1 items-start">
          <a
            href="mailto:support@lubenis.fashion.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl uppercase border-b border-gray-700"
          >
            Facebook
          </a>
          <a
            href="mailto:support@lubenis.fashion.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl uppercase border-b border-gray-700"
          >
            Instagram
          </a>
          <a
            href="mailto:support@lubenis.fashion.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl uppercase border-b border-gray-700"
          >
            Twitter
          </a>
          <a
            href="mailto:support@lubenis.fashion.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl uppercase border-b border-gray-700"
          >
            Pinterest
          </a>
          <a
            href="mailto:support@lubenis.fashion.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl uppercase border-b border-gray-700"
          >
            TikTok
          </a>
          <a
            href="mailto:support@lubenis.fashion.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl uppercase border-b border-gray-700"
          >
            YouTube
          </a>
        </div>
      </div>
      <div className="bottom text-center">
        <a
          href="mailto:support@lubenis.fashion.com"
          target="_blank"
          rel="noreferrer"
          className="text-7xl text-cyan-500 border-b-4 border-cyan-500"
        >
          support@lubenis.fashion.com
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
