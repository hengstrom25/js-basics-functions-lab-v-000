// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  if (blocks > 42)
    return (blocks - 42);
  else
    return (42 - blocks);
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start < end)
    return (end - start) * 264;
}

  describe('distanceTravelledInFeet()', function() {
    it('returns the distance travelled in feet', function() {
      expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
    });

    it('returns a distance in feet', function() {
      expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    });

    it('returns distance when destination is below distance', function() {
      expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
    });
  });
