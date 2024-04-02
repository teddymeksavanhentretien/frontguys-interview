import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import { Comment } from '../models/comment'
import { commentService } from '../api/commentService'

interface CommentListProps {
  id: string;
}

export default function CommentList ({id}: CommentListProps) {
  const [commentList, setCommentList] = useState<Comment[]>([])

  useEffect(() => {
    let isSubscribed = true;

    const fetchComments = async () => {
        try {
            const data = await commentService.fetchForPokemon(id);
            if (isSubscribed) {
                setCommentList(data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    fetchComments();

    return () => {
        isSubscribed = false;
    };
  }, [id])

  return (
    <Card>
      <Card.Body>
        {commentList.map((comment) => 
            <div key={comment.id}>
                <b>{`${comment.author} (${comment.rating}) : `}</b>
                {comment.comment}
            </div>
        )}
      </Card.Body>
    </Card>
  )
}

CommentList.propTypes = {
  id: PropTypes.string
}