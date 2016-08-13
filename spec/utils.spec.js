describe("Utilties", function() {

  describe("Cycle Tests", function() {

    it("should traverse an array", function() {
      let cycle = cycleFactory("I like roo and ruth".split(" "));

      expect(cycle()).toEqual("I");
      expect(cycle()).toEqual("like");
      expect(cycle()).toEqual("roo");
      expect(cycle()).toEqual("and");
      expect(cycle()).toEqual("ruth");
    });

    it("should be able to cycle over an array, and back around", function() {
      let cycle = cycleFactory("I like roo".split(" "));

      expect(cycle()).toEqual("I");
      expect(cycle()).toEqual("like");
      expect(cycle()).toEqual("roo");
      expect(cycle()).toEqual("I");
      expect(cycle()).toEqual("like");
      expect(cycle()).toEqual("roo");
      expect(cycle()).toEqual("I");
      expect(cycle()).toEqual("like");
      expect(cycle()).toEqual("roo");
      expect(cycle()).toEqual("I");
      expect(cycle()).toEqual("like");
      expect(cycle()).toEqual("roo");
    });

    it("should traverse an array by specific keys", function() {
      let keys = [0, 1, 2];
      let cycle = cycleFactory("I like roo and ruth".split(" "), keys);

      expect(cycle()).toEqual("I");
      expect(cycle()).toEqual("like");
      expect(cycle()).toEqual("roo");
      expect(cycle()).not.toEqual("and");
    });

    it("should cycle an array by specific keys", function() {
      let keys = [0, 1, 2];
      let cycle = cycleFactory("I like roo and ruth".split(" "), keys);

      expect(cycle()).toEqual("I");
      expect(cycle()).toEqual("like");
      expect(cycle()).toEqual("roo");
      expect(cycle()).toEqual("I");
      expect(cycle()).toEqual("like");
      expect(cycle()).toEqual("roo");
      expect(cycle()).toEqual("I");
      expect(cycle()).toEqual("like");
      expect(cycle()).toEqual("roo");
    });

    it("should cycle an object by specific keys", function() {
      let keys = ["name", "age", "dob"];
      let obj = {
        name: "Johann",
        job: "Tester",
        dob: "Never not born",
        age: 666
      };
      let cycle = cycleFactory(obj, keys);

      expect(cycle()).toEqual("Johann");
      expect(cycle()).toEqual(666);
      expect(cycle()).toEqual("Never not born");
      expect(cycle()).toEqual("Johann");
      expect(cycle()).toEqual(666);
      expect(cycle()).toEqual("Never not born");
    });
  });

});
