import { ZodType, z } from "zod";
import { innerSchema } from "../inner-type";
import type { Test } from "../test-type";

export const TestSchema = z.object({
  prop1: innerSchema,
}) as ZodType<Test>;
