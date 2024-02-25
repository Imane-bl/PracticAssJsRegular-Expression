
#####
  Regular Expression

  - replace
  - replaceAll
  - 
## Quantifiers:
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something

 ##Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.

  ###- Ranges Part 1
 Ranges
 - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

 - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
  . => matches any character, except newline(\n) or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.


### Quantifiers 1
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
  --Email/--IP/--Phone/--URL
