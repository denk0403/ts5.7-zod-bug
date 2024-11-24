import { objWrapper, stringWrapper, Wrapper } from "../wrapper";

export const TestWrapper = objWrapper({
  prop1: objWrapper({
    prop1: stringWrapper() as Wrapper<"hello">,
  }),
});
