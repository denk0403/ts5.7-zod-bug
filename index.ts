import { TestSchema } from "./packages/test-schema";
import { foo } from "./packages/foo";

const parseResult = TestSchema.safeParse({
  prop1: {
    prop1: "hello",
  },
});

if (parseResult.success) {
  foo(parseResult.data);
}
