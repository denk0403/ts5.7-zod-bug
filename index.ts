import { foo } from "./packages/foo";
import { TestWrapper } from "./packages/test-wrapper";
import { unwrap } from "./packages/wrapper";

const unwrappedTest = unwrap(TestWrapper);

foo(unwrappedTest);
