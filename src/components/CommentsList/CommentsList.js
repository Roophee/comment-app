import React, { useEffect, useState } from 'react';
import CommentItem from '../CommentItem';
import MoreCommentsBtn from '../MoreCommentsBtn';
import Pagination from '../Pagination';
import CommentForm from '../CommentForm';

const CommentsList = () => {
  const [serverResponse, setServerResponse] = useState(undefined);
  const [moreButtonClicked, setMoreButtonClicked] = useState(false);
  const [urlRequest, setUrlRequest] = useState(
    'https://jordan.ashton.fashion/api/goods/30/comments'
  );
  useEffect(() => {
    if (urlRequest) {
      fetch(urlRequest)
        .then((res) => {
            if (res.status !== 200) {
                throw new Error('Network response was not OK');
            }else{
                return res.json();
            };
        })
          .catch((error) => {
              // eslint-disable-next-line no-console
              console.error('There has been a problem with your fetch operation:' , error)
          })
        .then(resp =>
          setServerResponse(prevState => {
            if (moreButtonClicked) {
              const moreResponse = { ...resp, data: [...prevState.data, ...resp.data] };
              setMoreButtonClicked(false);
              setUrlRequest(null);
              return moreResponse;
            }
            setUrlRequest(null);
            return resp;
          })
        );
    }
  }, [urlRequest, moreButtonClicked]);

  return (
    <>
      <div className="comments__panel">
        {serverResponse &&
          serverResponse.data.map(item => <CommentItem key={item.id} item={item} />)}
          {serverResponse && serverResponse.current_page === serverResponse.last_page && (
              <CommentForm setUrlRequest={setUrlRequest} lastPage={serverResponse.last_page_url} /> )}
      </div>
      <div className="buttons__panel">
        {serverResponse && (
          <MoreCommentsBtn
            moreButtonClicked={moreButtonClicked}
            setUrlRequest={setUrlRequest}
            setMoreButtonClicked={setMoreButtonClicked}
            next={serverResponse.next_page_url}
          />
        )}
        {serverResponse && (
          <Pagination urlSetter={setUrlRequest} apiData={serverResponse} />
        )}
      </div>
    </>
  );
};

export default CommentsList;
