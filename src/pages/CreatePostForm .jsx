import React, { useState } from "react";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Новый пост отправлен:", { title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h2>Форма создания нового поста</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Заголовок:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Содержимое:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Создать пост</button>
      </form>
    </div>
  );
};

export default NewPostForm;
