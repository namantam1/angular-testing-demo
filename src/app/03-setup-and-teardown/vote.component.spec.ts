import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increament vote on upvote', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });
  
  it('should decrement vote on downvote', () => {
    component.downVote();
  
    expect(component.totalVotes).toBe(-1);
  });
});