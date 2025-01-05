"use client";
import React, { useState, useEffect, FormEvent } from 'react';

// Define the type for a single comment
interface CommentType {
  id: number;
  username: string;
  comment: string;
}

const Comment = () => {
  const [username, setUsername] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<CommentType[]>([]);

  // Load comments from local storage when the component mounts
  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments) as CommentType[]);
    }
  }, []);

  // Save comments to local storage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim() && comment.trim()) {
      const newComment: CommentType = { 
        username, 
        comment, 
        id: Date.now() 
      };
      setComments([newComment, ...comments]);
      setUsername('');
      setComment('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2"
          required
        />
        <textarea
          placeholder="Write your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border rounded p-2 h-24"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-accentDarkSecondary text-white px-4 py-2 rounded "
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        {comments.length > 0 ? (
          comments.map((c) => (
            <div key={c.id} className="border-b pb-2 mb-2">
              <p className="font-semibold">{c.username}</p>
              <p>{c.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first!</p>
        )}
      </div>
    </div>
  );
};

export default Comment;
