
class Frame
  include DataMapper::Resource


  property :id,               Serial
  property :text,             Serial
  belongs_to :user

end
