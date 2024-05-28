import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import articles from '../components/articles';

const ArticleList = () => {
    const articleListRef = useRef(null);

    useEffect(() => {
        if (articleListRef.current) {
            articleListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

    const renderArticles = () => {
        return articles.map((article, index) => (
            <div key={article.id} className="article-item">
                <Link to={`/articles/${article.id}`}>
                    <p className="date">{article.date}</p>
                    <h2>{article.title}</h2>
                    <p>{truncateText(article.excerpt, 290)}</p>
                    <p className="author">{article.author}</p>
                </Link>
            </div>
        ));
    };

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
            <div ref={articleListRef} className="article-list">
                <div className="article-grid">
                    {renderArticles()}
                </div>
            </div>
        </div>
    );
};

export default ArticleList;
