import styled from 'styled-components';
import TopPanel from '../organisms/TopPanel/TopPanel';
import DeleteButton from '../atoms/Button/DeleteButton';
import FeedCard from '../organisms/AnswerFeedCard/AnswerFeedCard';
import imageData from '../../assets/imageData';
import EmptyBox from '../atoms/EmptyBox/EmptyBox';
// TODO(노진석) : 나중에 로직 만들 때 수정
export default function AnswerPage() {
  const questionCount = 3;
  const mockData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  return (
    <>
      <TopPanel />
      <Wrapper>
        <Container>
          <DeleteButtonBox>
            <DeleteButton />
          </DeleteButtonBox>
          <QuestionBox>
            <Message>
              <MessageIcon src={imageData.messageIcon} alt="메세지 아이콘" />
              {questionCount > 0
                ? `${questionCount}개의 질문이 있습니다.`
                : '아직 질문이 없습니다'}
            </Message>
            {questionCount > 0 ? (
              mockData.map((it) => <FeedCard key={it.id} />)
            ) : (
              <EmptyBox />
            )}
          </QuestionBox>
        </Container>
      </Wrapper>
    </>
  );
}

const QuestionBox = styled.div`
  padding: 16px;
  border: 1px solid var(--Brown-30);
  border-radius: 16px;
  background: var(--Brown-10);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MessageIcon = styled.img`
  margin-right: 8px;
  width: 24px;
  height: 24px;

  @media screen and (max-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;
const Message = styled.span`
  color: var(--Brown-40);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Actor;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 24px;
  }
`;

const Container = styled.div`
  margin: 0 32px 100px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 716px;
  width: 100%;
`;

const DeleteButtonBox = styled.div`
  margin-left: auto;
`;
