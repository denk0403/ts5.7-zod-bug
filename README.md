# Type Assertion Bug in TypeScript 5.7

## Steps to Reproduce

1. Run `pnpm i` to install dependencies. Make sure TypeScript v5.7.2 is installed.
2. Run `pnpm tsc` to perform type-checking. You should see the following error output:

```sh
Conversion of type 'ZodObject<{ prop1: ZodObject<{ prop1: ZodType<"hello", ZodTypeDef, "hello">; }, "strip", ZodTypeAny, { prop1: ZodType<"hello", ZodTypeDef, "hello">; }, { ...; }>; }, "strip", ZodTypeAny, { ...; }, { ...; }>' to type 'ZodType<Test, ZodTypeDef, Test>' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  The types of '_type.prop1.prop1' are incompatible between these types.
    Type 'ZodType<"hello", ZodTypeDef, "hello">' is not comparable to type '"hello"'.

5 export const TestSchema = z.object({
                            ~~~~~~~~~~
6   prop1: innerSchema,
  ~~~~~~~~~~~~~~~~~~~~~
7 }) as ZodType<Test>;
  ~~~~~~~~~~~~~~~~~~~


Found 1 error.

 ELIFECYCLE  Command failed with exit code 2.
```

3. Next, run `pnpm i typescript@5.6.3` to install TypeScript 5.6.3.
4. Run `pnpm tsc` and see that the error is no longer present.
