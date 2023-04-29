import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Post muito top, curti demais!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    new Date(publishedAt),
    "dd 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt),
    { locale: ptBR, addSuffix: true }
  );

  const isNewCommentInputEmpty = newCommentText.length === 0;

  function handleCreateNewComment(event) {
    // Previne o comportamento padrão de envio de formulário
    event.preventDefault();

    // Define o valor do novo comentário
    setComments((prevState) => [...prevState, newCommentText]);
    // Limpa o campo textarea
    setNewCommentText("");
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  function deleteComment(comment) {
    const commentsWithoutDeletedOne = comments.filter(
      (commentText) => commentText !== comment
    );
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={index}>
                <a
                  href={item.content}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.content}
                </a>
              </p>
            );
          } else if (item.type === "hashtag") {
            return (
              <p key={index} className={styles.hashtag}>
                <a
                  key={index}
                  href={`https://twitter.com/hashtag/${item.content}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentInputEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
