global._init = function() {
  const gameObject = _gameObject;
  global.log = (...args) => console.log(...args);

  global.move = (offsetX, offsetY) => {
    gameObject.position.x += offsetX;
    gameObject.position.y += offsetY; 
    return gameObject;
  }
}