{{PROBLEM}} Multi-Class Planned Design Recipe
1. Describe the Problem
      As a user
      I want to be able to log my bowling score, in adherence to bowling rolls

2. Design the Class System

┌───────────┐
│Class Frame
└───────────┘

┌─────────────────────────┐
│ Initialize Method(entry)│
│  takes entry from user  │
└─────────────────────────┘

┌──────────────────┐
│  Read Method     │
│  returns entries │
└──────────────────┘

┌─────────────────────────────────────────────┐
│ Read_Specific Method                        │
│ Returns diary entry                         │
│ Based on (wpm, time)                        │
│ wpm = user reading speed / words per minute │
│ time = time user has to read                │
└─────────────────────────────────────────────┘

┌───────────────────────────────────────────┐
│   Todo Class                              │
│   Marks an item as Todo and records list  │
│   Also returns todo list when called      │
└───────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│  Contacts Class searches entries for     │
│  Phone numbers and returns them          │
│                                          │
└──────────────────────────────────────────┘

class Diary
  def initialize
    @entries = []
    @todo = []
  end

  def add_new_entry(entry)
    @entries << entry
  end

  def read
    return @entries
  end

  def read_specific(wpm, minutes)
    @total_words = wpm * minutes #returns how many words user can read i.e. wpm 200, minutes 10 = 2000 words
    @entry_count = @entries.each_with_index { |entry, index| entry.split(" ").size  
    @difference = @total_words - @entry_count
    @difference.min[index]  
  }
  end
  #DEFFO not going to work, but hey I'm hangin'

  class DiaryEntry
    def initialize(title, contents)
      @title = title
      @contents = contents
    end

    def all
      return @title @contents
  end

  # class Todo
  # def todo_list(todo)
  #   @todo << todo
  #   return @todo
  # end

  # class Contacts
  # def contacts
  #   return @entries.split(" ").to_i == 11
  # end



3. Create Examples as Integration Tests
Create examples of the classes being used together in different situations and combinations that reflect the ways in which the system will be used.

DIARY ENTRY
diary_entry = DiaryEntry.new("my contents")
expect(diary_entry.all).to eq "my contents"

diary_entry = DiaryEntry.new("my todo")
diary_entry.mark_as_todo
expect(diary_entry.todos).to eq "my todo"

diary_entry = DiaryEntry.new("my todo")
diary_entry2 = DiaryEntry.new("my todo 2")
diary_entry.mark_as_todo
diary_entry2.mark_as_todo
expect(diary_entry.todos).to eq "my todo", "my todo 2"



INTEGRATION
diary_entry = DiaryEntry.new("my title", "my contents")
diary = Diary.new
diary.add_new_entry(diary_entry)
expect(diary.read).to eq "my title", "my contents"











4. Create Examples as Unit Tests
Create examples, where appropriate, of the behaviour of each relevant class at a more granular level of detail.

# EXAMPLE

# Constructs a track
track = Track.new("Carte Blanche", "Veracocha")
track.title # => "Carte Blanche"
Encode each example as a test. You can add to the above list as you go.

5. Implement the Behaviour
After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour.