import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({ name, description, message, photoURL }) => {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar />
            <div className="post__info">
               <h2>{name}</h2> 
               <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption 
                Icon={ThumbUpOffAltIcon} 
                title="Like"
                color='gray'
            />
            <InputOption 
                Icon={CommentIcon} 
                title="Comment"
                color='gray'
            />
            <InputOption 
                Icon={ShareIcon} 
                title="Share"
                color='gray'
            />
            <InputOption 
                Icon={SendIcon} 
                title="Send"
                color='gray'
            />
        </div>
    </div>
  )
}

export default Post