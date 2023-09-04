const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total , blog)=>{
    return total + blog.likes
  },0)
}

const favouriteBlog = (blogs) => {
  if (blogs.length === 0 ) return null
  const mostLikedBlog = blogs.reduce((prev, current) => (current.likes > prev.likes ? current : prev))
  return {
    title : mostLikedBlog.title,
    author : mostLikedBlog.author,
    likes : mostLikedBlog.likes
  }
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null
  const  authorCounts = _.countBy(blogs, 'author')
  const topAuthor = _.maxBy(_.keys(authorCounts), (author) => authorCounts[author])

  return {
    author : topAuthor,
    blogs: authorCounts[topAuthor]
  }
}



module.exports = {dummy, totalLikes, favouriteBlog, mostBlogs}