import React, { useCallback } from 'react'

const Message = React.memo(({message}) =>{
    return <p>{message}</p>
})

const ListItem = React.memo(({post}) => {
    return(
        <li key={post.id}>
            <p>{post.title}</p>
        </li>
        )
})
const List = React.memo(({posts, testFuntion}) => {
    return(
        <ul>
            {posts.map(post => (
                <ListItem key={post.id} post={post}/>
             ))}
        </ul>
    )
})

const D = ({message, posts}) => {
  const testFuntion = useCallback(() => {},[]);
  return (
    <div>
        <h1>D components</h1>
        <Message message={message}/>
        <List posts={posts} testFuntion={testFuntion}/>
    </div>
  )
}

export default D