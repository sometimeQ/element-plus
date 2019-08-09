export default [
  {
    value: '0',
    label: '',
    specifications: []
  },
  {
    value: '1',
    label: '斤',
    specifications: (() => {
      let ret = []

      for (let i = 1; i <= 100; i++) {
        ret.push({
          id: i,
          value: `1:${i}`,
          label: `${i} 斤`
        })
      }

      return [
        {
          id: 0,
          value: '1:0.5',
          label: '0.5 斤'
        },
        ...ret
      ]
    })()
  },
  {
    value: '2',
    label: '件',
    specifications: (() => {
      let ret = []

      for (let i = 1; i <= 100; i++) {
        ret.push({
          id: i,
          value: `2:${i}`,
          label: `${i} 件`
        })
      }

      return ret
    })()
  },
  {
    value: '3',
    label: '桶',
    specifications: (() => {
      let ret = []

      for (let i = 1; i <= 100; i++) {
        ret.push({
          id: i,
          value: `3:${i}`,
          label: `${i} 桶`
        })
      }

      return ret
    })()
  },
  {
    value: '4',
    label: '袋',
    specifications: (() => {
      let ret = []

      for (let i = 1; i <= 100; i++) {
        ret.push({
          id: i,
          value: `4:${i}`,
          label: `${i} 袋`
        })
      }

      return ret
    })()
  },
  {
    value: '5',
    label: '瓶',
    specifications: (() => {
      let ret = []

      for (let i = 1; i <= 100; i++) {
        ret.push({
          id: i,
          value: `5:${i}`,
          label: `${i} 瓶`
        })
      }

      return ret
    })()
  },
  {
    value: '6',
    label: '个',
    specifications: (() => {
      let ret = []

      for (let i = 1; i <= 100; i++) {
        ret.push({
          id: i,
          value: `6:${i}`,
          label: `${i} 个`
        })
      }

      return ret
    })()
  },
  {
    value: '7',
    label: '箱',
    specifications: (() => {
      let ret = []

      for (let i = 1; i <= 100; i++) {
        ret.push({
          id: i,
          value: `7:${i}`,
          label: `${i} 箱`
        })
      }

      return ret
    })()
  },
  {
    value: '8',
    label: '公斤',
    specifications: (() => {
      let ret = []

      for (let i = 1; i <= 100; i++) {
        ret.push({
          id: i,
          value: `8:${i}`,
          label: `${i} 公斤`
        })
      }

      return ret
    })()
  },
  {
    value: '9',
    label: '包',
    specifications: (() => {
      let ret = []

      for (let i = 1; i <= 100; i++) {
        ret.push({
          id: i,
          value: `9:${i}`,
          label: `${i} 包`
        })
      }

      return ret
    })()
  }
]
