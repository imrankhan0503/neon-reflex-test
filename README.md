# Neon Reflex

## Application Proposal

Neon Reflex is a simple single-page guessing game built with Next.js and TypeScript.

The application displays three squares, with one square randomly selected as the correct choice at the beginning of each game. The player's goal is to guess and select the correct square.

The player can select only one square per game. After a square is selected, the game displays whether the player won or lost and provides an option to restart the game.

### Initial Game

At the beginning of the game, three purple squares are displayed. One of the three squares is randomly selected as the correct square, but this is hidden from the player.

The player can click one of the three squares to make a choice.

![Initial game](public/initial-game.png)

### Winning Condition

If the player selects the correct square, the selected square becomes green and the message "You won!" is displayed.

After the selection, all three squares are disabled so the player cannot make another choice. The "Restart Game" button is also displayed.

![Winning result](public/winning-game.png)

### Losing Condition

If the player selects an incorrect square, the selected square becomes red and the message "You lost!" is displayed.

The squares are disabled and the "Restart Game" button is displayed.

![Losing result](public/losing-game.png)

### Restarting the Game

When the player clicks the "Restart Game" button, the game is reset. A new correct square is randomly selected, the previous result is removed, and all three squares become available again.

The player can then make a new choice.

## Components

The application consists of seven components:

- Header – contains the application title and subtitle.
- Title – displays the main title "Neon Reflex".
- Subtitle – displays the instruction "Click the correct square".
- Container – contains the main game logic and manages the game state.
- Square – represents each of the three selectable squares.
- Result – displays the winning or losing message.
- RestartButton – allows the player to restart the game.

## Testing

The application is tested using Jest and React Testing Library.

The project contains a minimum of 20 unit tests. The unit tests check individual components and their behavior, including rendering elements, displaying text, button click events, enabled and disabled states, and the different visual states of the squares.

The unit tests use different React Testing Library queries, including `getByRole`, `getAllByRole`, and `queryByRole`.

The project also contains three integration tests that check how different parts of the application work together and how the game state changes.

The integration tests check:

- Selecting the correct square displays the winning result.
- Selecting an incorrect square displays the losing result.
- Restarting the game removes the previous result and enables the squares again.

## Feedback on the Tests

### Additional Tests

No additional tests were needed. The existing unit and integration tests were sufficient to implement and verify the main functionality of the application.

### How Could the Tests Have Been Improved?

The integration tests could have verified more than just the result message after a square is clicked. For example, they could also verify that all three squares become disabled after a selection. This would verify that the `gameFinished` state is correctly passed from the `Container` component to all `Square` components.

### What Should Have Been Tested That the Initial Tests Missed?

The initial tests covered the main game functionality, including selecting a square, displaying the result, disabling the squares, and restarting the game. No major functionality was missed.

One possible improvement would have been to test all three possible correct squares, since the correct square can be Square 1, Square 2, or Square 3. This would provide additional test coverage, but it was not necessary to verify the main functionality of the application.