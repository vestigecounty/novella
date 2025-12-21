# start
scene: meadow_sylvie
**Narrator**: Welcome to this simple visual novel!
**Narrator**: You're standing in a beautiful meadow with your friend Sylvie.

**Sylvie**: Hello! I'm so glad you came to visit me today!
**Sylvie**: What would you like to do?

[Let's play a game](#game_path)
[Let's read a book together](#book_path)
[Let's take a walk](#walk_path)

# game_path
scene: room_games
**Sylvie**: Great! Let's play something fun.
**Sylvie**: We could play chess or cards.

[Chess sounds fun](#chess)
[I prefer cards](#cards)

# chess
scene: room_games
**Sylvie**: Excellent choice! This should be interesting.
**Narrator**: You play a tense game of chess. After an hour of intense strategy...
**Sylvie**: Checkmate! You played well though!
**Narrator**: You lost, but it was a good match.

[Try again](#game_path)
[That was fun!](#end_scene)

# cards
scene: room_games
**Sylvie**: Wonderful! Let's see who wins this time.
**Narrator**: Cards fly across the table in an exciting game of luck and strategy.
**Sylvie**: I think you won this round!
**Narrator**: You came out ahead in the game!

[Play another round](#game_path)
[That was great!](#end_scene)

# book_path
scene: library_books
**Sylvie**: I love reading! Which genre interests you?

[A mystery novel](#mystery)
[A fantasy epic](#fantasy)
[A romance story](#romance)

# mystery
scene: library_books
**Sylvie**: Mystery novels are absolutely thrilling!
**Narrator**: You lose yourself in an intriguing whodunit. Hours pass as you turn page after page.
**Narrator**: Finally, you reach the climax and discover the culprit!
**Sylvie**: What did you think? Did you guess the ending?

[Yes, that was amazing!](#end_scene)
[Not really my style](#book_path)

# fantasy
scene: library_books
**Sylvie**: Fantasy worlds are so immersive and magical!
**Narrator**: You discover an epic tale of dragons, wizards, and quests.
**Narrator**: The story sweeps you away to a realm of wonder and adventure.
**Sylvie**: Wasn't that incredible? The world-building is superb!

[Absolutely!](#end_scene)
[It was okay](#book_path)

# romance
scene: library_books
**Sylvie**: *smiles warmly* This one is very special.
**Narrator**: A touching love story unfolds before your eyes, filled with tender moments.
**Narrator**: By the end, tears are rolling down your cheeks.
**Sylvie**: This one always gets to me too. Wasn't it beautiful?

[Yes, it really was](#end_scene)
[Let's try something else](#book_path)

# walk_path
scene: meadow_sylvie
**Sylvie**: A walk sounds absolutely perfect!
**Narrator**: You walk through the meadow together, enjoying the warm sunshine and gentle breeze.
**Narrator**: Wildflowers sway in the wind as you talk about life and dreams.
**Sylvie**: This is nice, being out here with you. Thank you for this moment.

[This was wonderful](#end_scene)
[Let's do something else](#start)

# end_scene
scene: meadow_sylvie
**Narrator**: Thank you for spending time with Sylvie!
**Narrator**: You had a wonderful day together filled with laughter and adventure.
**Narrator**: This is the end of this visual novel.
**Narrator**: Feel free to play again and choose different paths to explore all the stories!