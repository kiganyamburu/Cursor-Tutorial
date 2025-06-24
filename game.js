// Simple Kaboom.js Platformer Game

// Initialize Kaboom when the script loads
kaboom({
  global: true,
  fullscreen: false,
  scale: 1,
  debug: false,
  clearColor: [0, 0, 0, 1],
  width: 800,
  height: 600,
});

// Set gravity for the world
setGravity(1200);

// Game variables
let score = 0;
let gameOver = false;

// Game scene
scene("game", () => {
  // Background
  add([
    rect(width(), height()),
    color(135, 206, 235), // Sky blue
    pos(0, 0),
    "background",
  ]);

  // Player
  const player = add([
    rect(32, 32),
    color(255, 100, 100), // Red square
    pos(100, 300),
    body(),
    area(),
    "player",
  ]);

  // Ground platform
  add([
    rect(width(), 40),
    color(34, 139, 34), // Forest green
    pos(0, height() - 40),
    area(),
    body({ isStatic: true }),
    "platform",
  ]);

  // Floating platforms
  const platforms = [
    { x: 200, y: 450, w: 120, h: 20 },
    { x: 400, y: 350, w: 120, h: 20 },
    { x: 600, y: 250, w: 120, h: 20 },
    { x: 300, y: 150, w: 120, h: 20 },
    { x: 500, y: 100, w: 120, h: 20 },
  ];

  platforms.forEach((platform) => {
    add([
      rect(platform.w, platform.h),
      color(139, 69, 19), // Brown
      pos(platform.x, platform.y),
      area(),
      body({ isStatic: true }),
      "platform",
    ]);
  });

  // Collectible items
  const collectibles = [
    { x: 250, y: 400 },
    { x: 450, y: 300 },
    { x: 650, y: 200 },
    { x: 350, y: 100 },
    { x: 550, y: 50 },
  ];

  collectibles.forEach((collectible) => {
    add([
      rect(20, 20),
      color(255, 215, 0), // Gold
      pos(collectible.x, collectible.y),
      area(),
      "collectible",
    ]);
  });

  // Score display
  const scoreText = add([
    text("Score: 0"),
    pos(20, 20),
    color(255, 255, 255),
    { value: 0 },
  ]);

  // Player movement
  onKeyDown("left", () => {
    if (!gameOver) {
      player.move(-200, 0);
    }
  });

  onKeyDown("right", () => {
    if (!gameOver) {
      player.move(200, 0);
    }
  });

  onKeyDown("up", () => {
    if (!gameOver && player.isGrounded()) {
      player.jump(700);
    }
  });

  onKeyDown("space", () => {
    if (!gameOver && player.isGrounded()) {
      player.jump(700);
    }
  });

  onKeyDown("a", () => {
    if (!gameOver) {
      player.move(-200, 0);
    }
  });

  onKeyDown("d", () => {
    if (!gameOver) {
      player.move(200, 0);
    }
  });

  onKeyDown("w", () => {
    if (!gameOver && player.isGrounded()) {
      player.jump(700);
    }
  });

  // Restart game
  onKeyDown("r", () => {
    go("game");
  });

  // Collect items
  player.onCollide("collectible", (collectible) => {
    destroy(collectible);
    score += 10;
    scoreText.text = `Score: ${score}`;
    scoreText.value = score;
  });

  // Fall off screen
  player.onUpdate(() => {
    if (player.pos.y > height() + 100) {
      gameOver = true;
      add([
        text("Game Over! Press R to restart", { size: 32 }),
        pos(center().x - 200, center().y),
        color(255, 0, 0),
      ]);
    }
  });

  // Win condition
  onUpdate(() => {
    if (score >= 50 && !gameOver) {
      gameOver = true;
      add([
        text("You Win! Press R to restart", { size: 32 }),
        pos(center().x - 150, center().y),
        color(0, 255, 0),
      ]);
    }
  });
});

// Start the game
go("game");
