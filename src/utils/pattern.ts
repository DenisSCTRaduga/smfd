import { random } from "../core/random";

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const alphanumeric = alpha + numeric;
const hex = "abcdef0123456789";

type PatternHandlers = Record<string, () => string>;

export const defaultPatternHandlers: PatternHandlers = {
  "#": () => random.pick(numeric),
  "A": () => random.pick(alpha),
  "*": () => random.pick(alphanumeric),
  "H": () => random.pick(hex),
};

export const applyPattern = (
  pattern: string,
  handlers: PatternHandlers = defaultPatternHandlers
): string => {
  return pattern.replace(/./g, (char) => {
    const handler = handlers[char];
    return handler ? handler() : char;
  });
};