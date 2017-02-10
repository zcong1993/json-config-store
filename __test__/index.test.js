const path = require('path')
const fs = require('fs')
const del = require('del')
const JsonConfigStore = require('../src')
const mockConfig = require('./_mock')

const cache = mockConfig

describe('config exists', () => {
  const conf = new JsonConfigStore({
    cwd: __dirname,
    configName: '_mock.json'
  })

  afterEach(() => {
    conf.clear()
    conf.set(cache)
  })

  test('get key', () => {
    expect(conf.get('name')).toBe('zcong1993')
    expect(conf.get('age')).toBe(18)
  })

  test('get all', () => {
    expect(conf.get()).toEqual({
      name: 'zcong1993',
      age: 18
    })
  })

  test('set', () => {
    const arr = [1, 2, 3]

    conf.set('test', 'test')
    conf.set('name', 'jest')
    conf.set({
      obj: 'obj'
    })
    conf.set({arr})
    expect(conf.get('test')).toBe('test')
    expect(conf.get('name')).toBe('jest')
    expect(conf.get('obj')).toBe('obj')
    expect(conf.get('arr')).toEqual(arr)
    expect(conf.set(arr)).toThrow(TypeError)
  })

  test('has', () => {
    expect(conf.has('name')).toBeTruthy()
    expect(conf.has('jest')).toBeFalsy()
  })

  test('delete', () => {
    conf.delete('age')
    expect(conf.has('age')).toBeFalsy()
    expect(conf.has('name')).toBeTruthy()
  })

  test('clear', () => {
    conf.clear()
    expect(conf.get()).toEqual({})
  })

  test('size', () => {
    expect(conf.size).toBe(2)
    conf.set('size', 3)
    expect(conf.size).toBe(3)
  })
})

describe('config not exists', () => {
  const opts = {
    cwd: __dirname,
    configName: '_notExist.json'
  }
  const filePath = path.join(__dirname, opts.configName)

  afterEach(() => {
    del(filePath)
  })

  test('auto create when not exists', () => {
    expect(fs.existsSync(filePath)).toBeFalsy()
    const notExist = new JsonConfigStore(opts)
    notExist.set('name', 'notExist')
    expect(fs.existsSync(filePath)).toBeTruthy()
  })
})
