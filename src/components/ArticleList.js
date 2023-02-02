import React from "react";
import blogData from "../data/blog";
import Article from "./Article";



function ArticleList() {
    const listArticles = blogData.posts.map((post) => {
        return (
            <Article 
                key={post.id} 
                title={post.title}
                date={post.date}
                preview={post.preview}
                minutes={post.minutes}
            />
        )
    })
    return (
        <main>
            {listArticles}
        </main>
    )
}

export default ArticleList;