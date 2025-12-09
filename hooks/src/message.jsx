import { Suspense, use } from 'react';

function Message({ MessagePromise }) {
  const messageContents = use(Promise.all([MessagePromise, MessagePromise]));
  return (
    <p>
      Here is the message:{' '}
      {messageContents.map((el) => (
        <div>{el}</div>
      ))}
    </p>
  );
}

export function MessageContainer({ messagePromise }) {
  return (
    <Suspense fallback={<p>⏳ Loading message...</p>}>
      <Message MessagePromise={messagePromise} />
    </Suspense>
  );
}
