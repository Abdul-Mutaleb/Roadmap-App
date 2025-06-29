import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../api/AppURL';

const Comments = ({ ideaId }) => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  // For editing comments
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Get current user info from localStorage (assumes saved on login)
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const currentUserName = currentUser?.name;

  useEffect(() => {
    axios.get(`${AppURL.GetComments}/${ideaId}`)
      .then((response) => {
        setCommentList(response.data);
      })
      .catch((error) => {
        console.error("Error loading comments:", error);
      });
  }, [ideaId]);

  // Submit new comment
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    const newComment = {
      idea_id: ideaId,
      comment: comment.trim(),
    };

    axios.post(AppURL.PostComment, newComment, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then((res) => {
        setCommentList([res.data, ...commentList]);
        setComment('');
      })
      .catch((err) => {
        console.error("Submit failed:", err);
      });
  };

  // Start editing a comment
  const handleEditClick = (id, text) => {
    setEditingCommentId(id);
    setEditingText(text);
  };

  // Save edited comment
  const handleSaveEdit = (id) => {
    if (!editingText.trim()) return;

    axios.put(`${AppURL.PostComment}/${id}`, { comment: editingText.trim() }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => {
        setCommentList(commentList.map(c => c.id === id ? res.data : c));
        setEditingCommentId(null);
        setEditingText("");
      })
      .catch(err => {
        console.error("Edit failed", err);
      });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditingText("");
  };

  // Delete a comment
  const handleDeleteClick = (id) => {
    if (!window.confirm("Are you sure you want to delete this comment?")) return;

    axios.delete(`${AppURL.PostComment}/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(() => {
        setCommentList(commentList.filter(c => c.id !== id));
      })
      .catch(err => {
        console.error("Delete failed", err);
      });
  };

  return (
    <div className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId={`comment-${ideaId}`}>
          <Form.Control
            as="textarea"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>

      <div className="mt-3">
        {commentList.length > 0 ? (
          commentList.map((com) => (
            <div key={com.id} className="border rounded p-2 mb-2">
              <strong>{com.user?.name || "Unknown User"}</strong>

              {editingCommentId === com.id ? (
                <>
                  <textarea
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    rows={3}
                    className="form-control"
                  />
                  <Button variant="primary" size="sm" onClick={() => handleSaveEdit(com.id)} className="mt-1 me-2">
                    Save
                  </Button>
                  <Button variant="secondary" size="sm" onClick={handleCancelEdit} className="mt-1">
                    Cancel
                  </Button>
                </>
              ) : (
                <p className="mb-0">{com.comment}</p>
              )}

              <small className="text-muted">{new Date(com.created_at).toLocaleString()}</small>

              {com.user?.name === currentUserName && editingCommentId !== com.id && (
                <>
                  <Button variant="link" size="sm" onClick={() => handleEditClick(com.id, com.comment)}>
                    Edit
                  </Button>
                  <Button variant="link" size="sm" className="text-danger" onClick={() => handleDeleteClick(com.id)}>
                    Delete
                  </Button>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-muted">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
