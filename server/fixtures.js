if (Friends.find().count() === 0) {
  Friends.insert({
    name: 'JonDoe',
    color: '#ff00ff'
  });
  Friends.insert({
    name: 'FooBar',
    color: '#ff0000'
  });
  Friends.insert({
    name: 'Jeko23',
    color: '#00ffff'
  });
}
