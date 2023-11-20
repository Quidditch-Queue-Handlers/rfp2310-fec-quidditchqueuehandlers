import React from 'react';
import AnswerListItem from './AnswerListItem';

const AnswerList = ({loadMoreAnswersClickHandler, displayedAnswerList, helpfulAnswerClickHandler, reportButtonClickHandler}) => {
const [isScrollable, setIsScrollable] = React.useState(false); //will change this when i am actually passing in valid data

  return (
    <div>
      <div>AnswerList</div>
      A:
      {displayedAnswerList?.map((answer) => (
        <AnswerListItem answer={answer} helpfulAnswerClickHandler={helpfulAnswerClickHandler} reportButtonClickHandler={reportButtonClickHandler} />
      ))}
      <button>Load More Answers</button>
    </div>
  );
};

export default AnswerList;