import React from 'react';
import './App.css';
import ReactPlayer from 'react-player' 

const PostTitle = ({ title }) => (
  <h3 className="post-title">{title}</h3>
)

const PostVideo = ({ url }) => (
  <ReactPlayer url={url} />
)

const DetailedText = ({ text }) => (
  <span>{text}</span>
)

const PostDetails = ({ upvotes, comments }) => (
  <div className="post-details">
    <DetailedText text={upvotes + " points"} /> &middot; <DetailedText text={comments + " comments"} />
  </div>
)

function getDataByActionType(actionType) {
  switch (actionType) {
    case 'up':
      return { cssClass: 'up', linkText: 'Upvote' }

    case 'down':
      return { cssClass: 'down', linkText: 'Downvote' }

    case 'comment':
      return { cssClass: 'comment', linkText: 'Comment' }

    case 'more':
    default:
      return { cssClass: 'more', linkText: 'More Options' }
  }
}

const ActionButton = ({ actionType }) => {
  const { cssClass, linkText } = getDataByActionType(actionType)
  return <a className={`p-btn ${cssClass}`} href="#">{linkText}</a>
}

const ShareButton = ({ socialNetwork }) => {
  if (socialNetwork === 'facebook') {
    return <a className='btn-share facebook' href="#">Facebook</a>

  } else if (socialNetwork === 'pinterest') {
    return <a className='btn-share pinterest' href="#">Pinterest</a>
  }
}

const ButtonsRow = () => {
  const commentActionType = 'comment'
  return (
    <div className="post-buttons">
      <div className="p-buttons">
        <ActionButton actionType='up' />
        <ActionButton actionType={'down'} />
        <ActionButton actionType={commentActionType} />
        <ActionButton actionType="more" />
      </div>
        <div className="share-buttons">
          <ShareButton socialNetwork="facebook" />
          <ShareButton socialNetwork="pinterest" />
        </div>
    </div>
  )
}

const Post = ({ title, videoURL, upvotes, comments }) => (
  <div className="post-box">
    <PostTitle title={title} />
    <PostVideo url={videoURL} />
    <PostDetails upvotes={upvotes} comments={comments} />
    <ButtonsRow />
  </div>
)


const App = ({ posts }) => (
  <div id='main-page'>
    {posts.map(post => (
      <Post key={post.id} title={post.title} videoURL={post.videoURL} upvotes={post.upvotes} comments={post.comments} />
    ))}    
  </div>
)

export default App;
