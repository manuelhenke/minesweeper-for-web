import { ActionType } from '@/types';

export function getSVGReference(id: string): string {
  // eslint-disable-next-line no-secrets/no-secrets
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 76" preserveAspectRatio="xMidYMid meet" enable-background="new 0 0 76 76"><use href="#${id}" /></svg>`;
}

export function deltaToActionType(number: number): ActionType {
  if (number > 0) {
    return ActionType.Placed;
  }

  if (number < 0) {
    return ActionType.Removed;
  }

  return ActionType.NoChange;
}

export function deepCopy<T>(object: T): T {
  if (Array.isArray(object)) {
    // @ts-expect-error: Unsafe type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return object.map((item) => deepCopy(item));
  }

  if (object instanceof Date) {
    // @ts-expect-error: Unsafe type
    return new Date(object.getTime());
  }

  if (object && typeof object === 'object') {
    const getters = Object.entries(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(object)))
      .filter(([key, descriptor]) => typeof descriptor.get === 'function' && key !== '__proto__')
      .map(([key]) => key);

    const copy: Record<string, unknown> = {};
    for (const key of [...Object.keys(object), ...getters]) {
      // @ts-expect-error: Unsafe type
      copy[key] = deepCopy(object[key]);
    }

    // @ts-expect-error: Unsafe type
    return copy;
  }

  return object;
}
