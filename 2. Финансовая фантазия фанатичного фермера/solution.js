// const readline = require('readline').createInterface(
//   process.stdin,
//   process.stdout,
// );

// const input = [];

// readline
//   .on('line', (line) => {
//     input.push(line);
//   })
//   .on('close', () => {
//     const result = solution(input.join('\n'));
//     console.log(result);
//     process.exit(0);
//   });

function solution(input) {
  function parseInput(input) {
    input = input.split('\n').map((line) => line.split(' '));
    const [n, m] = input.shift();
    return [+n, +m, input];
  }

  function isBlockInRegion([x, y]) {
    const id = getBlockId([x, y]);
    for (let region of regions) {
      if (region.items.has(id)) return region;
    }
    return false;
  }

  function createRegion([x, y]) {
    const region = { items: new Set() };
    regions.push(region);
    addBlockToRegion([x, y], region);
  }

  function addBlockToRegion([x, y], region) {
    const id = getBlockId([x, y]);
    region.items.add(id);
    const neighbours = getNeighbours([x, y]);
    for (let neighbour of neighbours) {
      if (!isBlockInRegion(neighbour)) addBlockToRegion(neighbour, region);
    }
  }

  function getNeighbours([x, y]) {
    const neighbours = [];
    for (let yi = y - 1; yi <= y + 1; yi++) {
      for (let xi = x - 1; xi <= x + 1; xi++) {
        if (yi === y && xi === x) continue;
        if (isBlockInRegion([xi, yi])) continue;
        if (field[yi] && field[yi][xi] === '1') neighbours.push([xi, yi]);
      }
    }
    return neighbours;
  }

  function getBlockId([x, y]) {
    return `${x} ${y}`;
  }

  function getRegionPosition(items) {
    const topLeft = [Infinity, Infinity];
    const bottomRight = [-Infinity, -Infinity];

    [...items].forEach((id) => {
      const [x, y] = id.split(' ').map(Number);
      topLeft[0] = Math.min(topLeft[0], x);
      topLeft[1] = Math.min(topLeft[1], y);
      bottomRight[0] = Math.max(bottomRight[0], x);
      bottomRight[1] = Math.max(bottomRight[1], y);
    });

    return [topLeft, bottomRight];
  }

  function calculateSquare([[x0, y0], [x1, y1]]) {
    return (x1 - x0 + 1) * (y1 - y0 + 1);
  }

  function getUsefulSquare(region) {
    const [[x0, y0], [x1, y1]] = region.position;
    let usefulSquare = 0;
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        if (field[y][x] === '1') usefulSquare++;
      }
    }
    return usefulSquare;
  }

  function calculateRank(region) {
    return region.usefulSquare / region.square;
  }

  const [n, m, field] = parseInput(input);
  let regions = [];

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      const value = field[y][x];
      if (value === '0') continue;
      if (isBlockInRegion([x, y])) continue;
      createRegion([x, y]);
    }
  }

  regions.forEach((region) => {
    region.position = getRegionPosition(region.items);
    region.square = calculateSquare(region.position);
    region.usefulSquare = getUsefulSquare(region);
    region.rank = calculateRank(region);
  });

  regions = regions
    .filter((region) => region.items.size > 1)
    .sort((a, b) => b.square - a.square)
    .sort((a, b) => b.rank - a.rank);

  return regions.length ? regions[0].square : 0;
}

export default solution;
