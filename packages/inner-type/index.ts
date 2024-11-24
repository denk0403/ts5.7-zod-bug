import { ZodType, z } from "zod";

export type InnerType = {
  prop1: "hello";
};

export const innerSchema = z.object({
  prop1: z.string() as ZodType<"hello">,
}) satisfies ZodType<InnerType>;
