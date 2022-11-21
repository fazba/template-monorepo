import { customRef } from 'vue'

/**
 * 为目标函数添加防抖
 * @param func 目标函数
 * @param time 防抖时间间隔
 * @param immediately 是否立刻执行
 * @returns 防抖的目标函数
 */
export function antiShake<T extends (...args: any) => void>(
  func: T,
  time = 0,
  immediately = false
): T {
  let handler = 0
  let lock = 0
  if (immediately) {
    return function (...args: any) {
      const now = Date.now()
      if (handler) {
        clearTimeout(handler)
      }
      if (lock < now) {
        func(...args)
        lock = now + time
      } else {
        handler = window.setTimeout(() => {
          handler = 0
          func(...args)
        }, time)
      }
    } as T
  } else {
    return function (...args: any) {
      if (handler) {
        clearTimeout(handler)
      }
      handler = window.setTimeout(() => {
        handler = 0
        func(...args)
      }, time)
    } as T
  }
}

/**
 * 自定义响应式变量
 * @param value 默认值
 * @param onChange 变化时触发的回调函数
 * @param immediate 是否立刻执行一次
 * @returns
 */
export function getCustomRef<T>(value: T, onChange: (val: T) => void, immediate = false) {
  if (immediate) {
    onChange(value)
  }
  return customRef((track, trigger) => {
    let _value = value
    return {
      get() {
        track()
        return _value
      },
      set(val: T) {
        if (_value != val) {
          _value = val
          onChange(_value)
          trigger()
        }
      },
    }
  })
}
/**
 * 设置遮罩开关 遮罩zindex = 500
 * @param status
 */
export function operationMask(status: boolean) {
  if (status) {
    const mask = document.createElement('div')
    mask.id = 'mask'
    mask.style.width = window.innerWidth + 'px'
    mask.style.height = window.innerHeight + 'px'
    mask.style.background = '#000'
    mask.style.opacity = '.3'
    mask.style.position = 'fixed'
    mask.style.top = '0'
    mask.style.left = '0'
    mask.style.zIndex = '500'
    document.body.appendChild(mask)
  } else {
    const mask = document.querySelector('#mask')
    mask?.remove()
  }
}
