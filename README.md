# Square Platformer - Kaboom.js Game

A simple platformer game built with Kaboom.js using square shapes instead of sprites.

## Features

- **Simple Controls**: Move left/right and jump on platforms
- **Square Graphics**: All game objects are simple colored rectangles
- **Physics**: Realistic jumping and platform collision
- **Collectibles**: Gold squares to collect for points
- **Score System**: Track your progress
- **Win/Lose Conditions**: Collect all items or fall off the screen
- **Improved Jump Height**: The player's jump height has been increased so you can reach all platforms easily.

## How to Play

1. Open `index.html` in your web browser
2. Use the following controls:
   - **A/D** or **←/→** - Move left/right
   - **W** or **↑** or **SPACE** - Jump (now jumps higher)
   - **R** - Restart game

## Game Objective

- Collect all the gold squares to win
- Avoid falling off the bottom of the screen
- Each gold square is worth 10 points
- Collect 50 points (5 squares) to win the game

## Technical Details

- Built with Kaboom.js game framework
- Uses HTML5 Canvas for rendering
- Physics-based movement and collision detection
- Responsive design with centered game container
- Gravity and jump height are tuned for fun platforming

## Files

- `index.html` - Main HTML file with game container and styling
- `game.js` - Game logic and Kaboom.js implementation
- `prompt.txt` - Original project requirements

## Running the Game

Simply open `index.html` in any modern web browser. No additional setup or installation required!

## Troubleshooting

- **Blank screen:** Make sure you are opening `index.html` in a modern browser and that both `index.html` and `game.js` are in the same folder. Refresh the page if needed.
- **Can't jump:** The player can only jump when standing on a platform or the ground. If you still can't jump, try refreshing the page.
- **Jump not high enough:** The jump height has been increased. If you still can't reach platforms, make sure you have the latest version of `game.js`.
- **Other issues:** Try clearing your browser cache or using a different browser.
