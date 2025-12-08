import { Suspense, use } from 'react';

function Message({ MessagePromise }) {
  const messageContent = use(MessagePromise);
  return <p>Here is the message: {messageContent}</p>;
}

export function MessageContainer({ messagePromise }) {
  return (
    <Suspense fallback={<p>⏳ Loading message...</p>}>
      <Message MessagePromise={messagePromise} />
    </Suspense>
  );
}
