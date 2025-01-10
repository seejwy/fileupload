import { getPaginatorPages } from "../utils";

getPaginatorPages;
describe("getPaginatorPages", () => {
  it("should return [1,2,3,4,5] if there are more than 10 pages and current page is less than 3", () => {
    expect(getPaginatorPages(10, 2)).toEqual([1, 2, 3, 4, 5]);
  });
  it("should return [1,2] if there are only 2 pages", () => {
    expect(getPaginatorPages(2, 1)).toEqual([1, 2]);
  });
  it("should return [6,7,8,9,10] if there are only 10 pages and we are at page 9", () => {
    expect(getPaginatorPages(10, 9)).toEqual([6, 7, 8, 9, 10]);
  });
});
