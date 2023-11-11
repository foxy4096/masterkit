import humanize from "humanize";

/* eslint-disable react/prop-types */
const NewsBox = ({ news }) => {
  return (
    <li className="w-auto mx-auto group sm:max-w-sm shadow-xl bg-gray-900 rounded-lg p-3">
      <a href={news.url} target="_blank" rel="noreferrer">
        <img
          src={
            news.urlToImage ||
            "https://placehold.co/600x400/000000/FFFFFF/png?text=No+Image+Provided+By+The+Source&font=roboto"
          }
          loading="lazy"
          alt={news.title}
          className="w-full rounded-lg"
        />
        <div className="mt-3 space-y-2">
          <span className="block text-indigo-600 text-sm">
            {humanize.naturalDay(new Date(news.publishedAt))}
          </span>
          <h3 className="text-lg text-indigo-400 duration-150 group-hover:text-indigo-500 font-semibold">
            {news.title}
          </h3>
          <p className="text-white mb-3">{news.description}</p>
          {news.author && (
            <span className="mt-4 py-1 px-2 rounded bg-slate-700 text-xs">
              By {news.author}
            </span>
          )}
        </div>
      </a>
    </li>
  );
};

export default NewsBox;
