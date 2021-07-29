import React, { useCallback, useState } from 'react';
import StyledCommentForm from './styles';

const CommentForm = props => {
  const { lastPage, setUrlRequest } = props;
  const [formName, setFormName] = useState('');
  const [formText, setFormText] = useState('');

  const onChangeHandler = useCallback(event => {
    if (event.target.id === 'name') {
      setFormName(event.target.value);
    }
    if (event.target.id === 'text') {
      setFormText(event.target.value);
    }
  }, []);

  const clearForm = () => {
    setFormName('');
    setFormText('');
  };

  const onCancelClickHandler = useCallback(event => {
    event.preventDefault();
    clearForm();
  }, []);

  const onSubmitClickHandler = useCallback(
    event => {
      event.preventDefault();
      const requestOptions = {
        method: 'POST',
        mode:'no-cors',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' },
        body: JSON.stringify({ name: formName, text: formText }),
      };
      fetch('https://jordan.ashton.fashion/api/goods/30/comments', requestOptions).then(
        response => {
          clearForm();
          setUrlRequest(lastPage);
        }
      );
    },
    [lastPage]
  );

  return (
    <StyledCommentForm>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            value={formName}
            onChange={onChangeHandler}
            type="text"
            name="name"
            id="name"
            maxLength="50"
            pattern="[A-Za-zА-Яа-яЁё]{2,}"
            placeholder="Введите имя (не менее двух символов)"
            required
          />
        </div>
        <div>
          <label htmlFor="text">Comment:</label>
          <textarea
            value={formText}
            onChange={onChangeHandler}
            type="text"
            name="text"
            id="text"
            maxLength="500"
            placeholder="Введите свой комментарий (не менее двух символов)"
            required
          />
        </div>
        <div className="form__buttons">
          <button onClick={onSubmitClickHandler} type="submit" className="form__button send">
            Send
          </button>
          <button onClick={onCancelClickHandler} type="cancel" className="form__button clear">
            Clear
          </button>
        </div>
      </form>
    </StyledCommentForm>
  );
};

export default CommentForm;
