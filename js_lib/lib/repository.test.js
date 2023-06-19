const Repository = require('./repository');

describe('Repository', () => {
  let repository;

  beforeEach(() => {
    repository = new Repository();
  });

  it('should add frames correctly', () => {
    repository.add_frame(1, 2, 3);
    repository.add_frame(4, 5, 6);

    expect(repository.frames).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it('should return frames correctly', () => {
    repository.add_frame(1, 2, 3);
    repository.add_frame(4, 5, 6);

    expect(repository.frames).toEqual([[1, 2, 3], [4, 5, 6]]);
  });
});
