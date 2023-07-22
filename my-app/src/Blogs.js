import React from 'react'

function Blogs() {
  return (
    <section className="blog-section">
      <h2>React Resources</h2>
      <div className="resource">
        <h3>React Official Documentation</h3>
        <p>
          The official documentation for React can be found on their website. It's a comprehensive resource for learning about React's core concepts, APIs, and best practices.
        </p>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">Visit React Official Website</a>
      </div>
      <div className="resource">
        <h3>W3Schools</h3>
        <p>
          W3Schools is a widely used online platform for learning web development technologies, including React. It offers tutorials, examples, and interactive code editors to practice your skills.
        </p>
        <a href="https://www.w3schools.com/react/" target="_blank" rel="noopener noreferrer">Visit W3Schools React Section</a>
      </div>
      <div className="resource">
        <h3>Stack Overflow</h3>
        <p>
          Stack Overflow is a popular Q&A platform where developers can ask and answer questions related to React and other programming topics. It's an excellent place to find solutions to common problems and learn from the community.
        </p>
        <a href="https://stackoverflow.com/questions/tagged/reactjs" target="_blank" rel="noopener noreferrer">Visit React Tag on Stack Overflow</a>
      </div>
    </section>
  )
}

export default Blogs
