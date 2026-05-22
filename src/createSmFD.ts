import { LocaleKey } from "./locale"
import { SmFD } from "./core/SmFD";
import { SmFDOptions } from "./core/types"
import { person } from "./generators/person";
import { phone } from "./generators/phone";
import { finance } from "./generators/finance"
import { date } from "./generators/date";
import { string } from "./generators/string";
import { id } from "./generators/id";
import { location } from "./generators/location";
import { random } from "./core/random";

export const createSmFD = (localeKey: LocaleKey = 'ru-RU', options?: SmFDOptions) => {
  const instance = new SmFD(localeKey, options);

  return Object.assign(instance, {
    person: person(instance),
    phone: phone(instance),
    location: location(instance),
    finance: finance(),
    date: date(),
    string: string(),
    id: id(),
    random: random,
  });
}
