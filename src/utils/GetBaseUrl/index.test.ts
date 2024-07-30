import getBaseUrl from "./index";

describe("envの値に応じてBaseになるurlを返す", () => {
  test("should return production URL", () => {
    process.env.NEXT_PUBLIC_VERCEL_BUILD_ENV = "production";
    expect(getBaseUrl()).toBe("https://imagetocalendar-eta.vercel.app");
  });

  test("should return development URL", () => {
    process.env.NEXT_PUBLIC_VERCEL_BUILD_ENV = "development";
    expect(getBaseUrl()).toBe("http://localhost:3000");
  });

  test("should return default URL", () => {
    process.env.NEXT_PUBLIC_VERCEL_BUILD_ENV = "test";
    expect(getBaseUrl()).toBe("http://localhost:3000");
  });
});
