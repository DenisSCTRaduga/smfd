# smfd

Small Fake Data — lightweight fake data generator for testing and prototyping.

⚠️ This is an alpha version. API may change.

---

## 📦 Installation

```bash
npm install @solanin/smfd -D
```

---

## Usage

```typescript
import { createSmFD } from "@so1anin/smfd";

const instance = createSmFD();

const user = {
  id: instance.id.uuid(), 
  firstName: instance.person.firstName(),
  lastName: instance.person.lastName(),
  phone: instance.phone.number(),
};
```

---

## Generators

### Person
- `instance.person.firstName();`
- `instance.person.lastName();`

### ID
- `instance.id.uuid();` // "3f9c1a2e-7b4d-4c8f-9a21-6d5e8b2f0c11"
- `instance.id.publicId(10);` // "aZ91KdLpQw"
- `instance.id.nanoId();` // "V1StGXR8_Z5jdHi6B-myT"
- `instance.id.hex(24);` // "a3f9c1e4b7d8a2c6f0e1d9ab"
- `instance.id.objectId();` // "665f1c2a9f1b2c3d4e5f6789"
- `instance.id.ulid();` // "00MB3J6K8XAZ91KDLPPQWERTY"

### Finance
- `instance.finance.amount(1000, 5000, 2);`

### Location
- `instance.location.city()`

### Phone
- `instance.phone.number();`

### String
- `instance.string.alpha(10);` // "aZbXkLmPqR"
- `instance.string.numeric(6);` // "482910"
- `instance.string.alphanumeric(8);` // "aZ91KdLp"
- `instance.string.nanoId();` // "V1StGXR8_Z5jdHi6B-myT"
- `instance.string.byPattern("###-AAA");` // "482-ABC"
- `instance.string.slug("Hello World");` // "hello-world"
- `instance.string.hex(6);` // "a3f9c1"

### Random
- `instance.random.int(1, 10);` // 7
- `instance.random.float(1, 10);` // 4.738492134
- `instance.random.float(1, 10, 2);` // 4.73
- `instance.random.pick(["a", "b", "c"]);` // "b"

### Date
- `instance.date.any();` // new Date("2012-05-14T12:34:56.000Z")
- `instance.date.any(from, to);` // random date between range
- `instance.date.recent();` // last 30 days
- `instance.date.recent(7);` // last 7 days