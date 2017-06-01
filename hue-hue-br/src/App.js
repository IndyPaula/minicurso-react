import React from 'react';
import './App.css';

const PostTitle = ({ title }) => (
  <h3 className="post-title">{title}</h3>
)

/* Exibir Vídeo no lugar da imagem (use o react-player) */
const PostImage = () => (
  <img src="images/no-video.jpg" className='post-image' alt="Nenhum video" />
)

const DetailedText = ({ text }) => (
  <span>{text}</span>
)

const PostDetails = () => (
  <div className="post-details">
    <DetailedText text="4,017 points" /> &middot; <DetailedText text="496 comments" />
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

const Post = ({ title }) => (
  <div className="post-box">
    <PostTitle title={title} />
    <PostImage />
    <PostDetails />
    <ButtonsRow />
  </div>
)


const App = ({ posts }) => (
  <Post title={posts[0].title} />
)

export default App;
