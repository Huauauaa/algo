import permutation from "../permutation";

test("permutation", () => {
  expect(permutation([1]).length).toBe(1);
  expect(permutation([1, 2]).length).toBe(2);
  expect(permutation([1, 2, 3]).length).toBe(6);
  expect(permutation([1, 2, 3, 4]).length).toBe(24);
});
