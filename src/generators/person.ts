import { SmFD } from "../core/SmFD";
import { random } from "../core/random";

export const person = (f: SmFD) => ({
  firstName: () => random.pick(f.locale.first_names),
  lastName: () => random.pick(f.locale.last_names),
});