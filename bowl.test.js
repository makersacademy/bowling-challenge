const Bowl = require('./bowl')

describe ('bowling class', () => {
  
  let bowl;

  beforeEach(() => {
    bowl = new Bowl()
  })
  
  it ('initializes with an empty frame', () =>{
    expect(bowl.getFrames()).toEqual([])
  })

  it ('adds a frame into players frames with addFrame', () =>{
    bowl.addFrame(1,2)
    expect(bowl.getFrames()).toEqual([[1,2]])
  })
  
  it ('stacks multiple frames in an array', () =>{
    bowl.addFrame(1,2)
    bowl.addFrame(2,3)
    expect(bowl.getFrames()).toEqual([[1,2], [2,3]])
  })

  describe ('bonus frame after 10th shot', () =>{
    it ('creates a bonus frame of a length of 1 and pushes to array', () =>{
      bowl.addBonusFrame(1)
      expect(bowl.getFrames()).toEqual([[1]])
    })
    it ('creates a bonus frame of a length of 3 and pushes to array', () =>{
      bowl.addBonusFrame(1,2,3)
      expect(bowl.getFrames()).toEqual([[1,2,3]])
    })
  })
})