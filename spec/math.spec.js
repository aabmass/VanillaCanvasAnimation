describe("Math Tests", function() {

  describe("Fundamental vector functions", function() {
    it("should correctly calculate the norm of unit vectors in many dimensions", function() {
      let v1 = [1];
      let v2 = [0, 1];
      let v3 = [1, 0];
      let v4 = [0, 0, 1];
      let v5 = [1, 0, 0];

      expect(mag(v1)).toEqual(1);
      expect(mag(v2)).toEqual(1);
      expect(mag(v3)).toEqual(1);
      expect(mag(v4)).toEqual(1);
      expect(mag(v5)).toEqual(1);
    });

    it("should correctly calculate the norm of some other vectors", function() {
      let v1 = [5, 5];
      let v2 = [0.12, 3.2];
      let v3 = [1.132, 3.2, 132.009];

      expect(mag(v1)).toEqual(7.0710678118654755);
      expect(mag(v2)).toEqual(3.20224920954007);
      expect(mag(v3)).toEqual(132.0526315716578);
    });

    it("should not give NaN when normalizing valid vectors", function() {
      let v1 = [-0.3211, 321.2];

      expect(normalize(v1)).not.toEqual([NaN, NaN]);
    });

    it("should normalize a unit vector to be itself", function() {
      let v1 = [0, 0, 0, 0, 1];

      expect(normalize(v1)).toEqual(v1);
    });

    it("should give NaN when trying to normalize zero vector", function() {
      let v1 = [0, 0, 0, 0, 0];

      expect(normalize(v1)).toEqual([NaN, NaN, NaN, NaN, NaN]);
    });

    it("should not equal itself for any non unit vector", function() {
      let v1 = [1, 0, 0, 0, 1];
      let v2 = [1, 1.2123, 0, 0, 1];
      let v3 = [1, 3, 21.32, 121.22222, -231.0001];

      expect(normalize(v1)).not.toEqual(v1);
      expect(normalize(v2)).not.toEqual(v2);
      expect(normalize(v3)).not.toEqual(v3);
    });

    it("should correctly normalize a vector", function() {
      let v1 = [5, 5];
      let v2 = [0.12, 3.2];

      expect(normalize(v1)).toEqual([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);
    });
  });

  describe("Movement of particles", function() {
    it("should mutate a vector to not be itself, regardless of factor", function() {
      let v1 = [1, 0, 0, 0, 1];
      let v2 = [1, 1.2123, 0, 0, 1];
      let v3 = [1, 3, 21.32, 121.22222, -231.0001];

      let randfloat = () => (Math.random() * 1000 - 500);
      let v4 = [0, 0, 0, 0, 0].map(randfloat);

      expect(mutateSlightly(v1)).not.toEqual(v1);
      expect(mutateSlightly(v2)).not.toEqual(v2);
      expect(mutateSlightly(v3)).not.toEqual(v3);
      expect(mutateSlightly(v4)).not.toEqual(v4);

      expect(mutateSlightly(v1, Math.random())).not.toEqual(v1);
      expect(mutateSlightly(v2, Math.random())).not.toEqual(v2);
      expect(mutateSlightly(v3, Math.random())).not.toEqual(v3);
      expect(mutateSlightly(v4, Math.random())).not.toEqual(v4);
    });
  });
});
