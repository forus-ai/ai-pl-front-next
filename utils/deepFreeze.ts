type Obj = Record<string, unknown>;

// Object.freeze 는 객체를 동결시킵니다. 동결된 객채는 변경할 수 없습니다.
// 하지만 Object.freeze 는 얕은 동결만 적용합니다.
// 깊은 동결을 위해 해당 함수를 재귀적으로 호출해 줍니다.

// reference: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

function deepFreeze<T extends Obj>(object: T): T {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    const frozenValue = isObj(value) ? deepFreeze(value) : value;
    (object as Obj)[name] = frozenValue;
  }
  return Object.freeze(object);
}

export default deepFreeze;

const isObj = (target: any): target is Obj => {
  if (!target) return false;
  return typeof target === 'object';
};
