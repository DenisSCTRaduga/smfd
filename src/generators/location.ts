import { SmFD } from "../core/SmFD";
import { random } from "../core/random";

export const location = (f: SmFD) => ({
  city(): string {
    return random.pick(f.locale.cities);
  },
});