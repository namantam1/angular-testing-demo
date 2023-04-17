import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChange event when upvoted', () => {
    component.voteChanged.subscribe(tv => {
      expect(tv).toBe(1);
    });

    component.upVote();
  });
});