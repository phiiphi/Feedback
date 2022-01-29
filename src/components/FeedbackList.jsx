import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback,onDelete }) => {
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem item={item} key={item.id} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default FeedbackList;
