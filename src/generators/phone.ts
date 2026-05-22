import { applyPattern } from "../utils/pattern";
import { SmFD } from "../core/SmFD";

export const phone = (f: SmFD) => ({
  number: () => {
    const format = f.locale.phone_formats?.[0] ?? "+# (###) ###-####";
    return applyPattern(format);
  },
});