import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

const FeedbackItem = ({ item, onDelete }) => {
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes
          color="purple"
          onClick={() => {
            onDelete(item.id);
          }}
        />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
