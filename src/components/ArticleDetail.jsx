import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../components/articles';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));
  const articleRef = useRef(null);

  useEffect(() => {
    if (articleRef.current) {
      articleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  if (!article) {
    return <h2>Статья не найдена</h2>;
  }

  return (
    <div>
    <div className="main-content">
    <div className="content-overlay">
    <div className='logo-cont'>
        <div className="logo-image"></div>
        </div>
      <h1 className="main-title">Статьи</h1>
      <h1 className="main-title">Международной Премии "Олимп красоты"</h1>
    </div>
    </div>
      <div ref={articleRef} className="article-detail">
        <Link to="/articles" className="back-link">Назад к статьям</Link>
        <div className="date">{article.date}</div>
        <h1 className="article-title">{article.title}</h1>
        {article.id === 11 ? (
          <>
            <p>{article.content}</p>
            <p>{article.content2}</p>
            <ul className='article-sub-list'>
              <li>{article.textli1}</li>
              <li>{article.textli2}</li>
              <li>{article.textli3}</li>
              <li>{article.textli4}</li>
              <li>{article.textli5}</li>
              <li>{article.textli6}</li>
              <li>{article.textli7}</li>
            </ul>
            <p>{article.content3}</p>
            <p>{article.content4}</p>
            <p>{article.content5}</p>
            <p>{article.content6}</p>
            <p>{article.content7}</p>
            <p>{article.content8}</p>

            <ul className='article-sub-list'>
            <p>{article.content9}</p>
              <li>{article.textli8}</li>
              <li>{article.textli9}</li>
              <li>{article.textli10}</li>
              <li>{article.textli11}</li>
              <li>{article.textli12}</li>
              <li>{article.textli13}</li>
              <li>{article.textli14}</li>
            </ul>
            <p>{article.content10}</p>
              <p>{article.content11}</p>
              <p>{article.content12}</p>
          </>
        ) : (
          <>
            <p>{article.content}</p>
            <p>{article.content2}</p>
            <p>{article.content3}</p>
            <p>{article.content4}</p>
            <p>{article.content5}</p>
            <p>{article.content6}</p>
            <p>{article.content7}</p>
            <p>{article.content8}</p>
            <p>{article.content9}</p>
            <p>{article.content10}</p>
            <p>{article.content11}</p>
          </>
        )}
        <div className="author">{article.author}</div>
      </div>
    </div>
  );
};

export default ArticleDetail;
