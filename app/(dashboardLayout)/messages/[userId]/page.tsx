const Messages = ({ params }: { params: { userId: string } }) => {
  // return  <MessageTab />;
  return <div>This is message by {params.userId}</div>;
};

export default Messages;
