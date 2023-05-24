import React from "react";

import './style.scss'
const CardBerita = ({ data, type }) => {
  return (
    <section className="articles">
      {data.map((item, idx) => (
        <article key={`berita-${item.title}-${idx}`} data-aos="fade-up" >
          <div className="article-wrapper">
            <figure>
              <img src={item.img} alt="imageItem" />
            </figure>
            <div className="article-body">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={`/${type}/${idx}/detail`} className="read-more">
                Read more <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default CardBerita;