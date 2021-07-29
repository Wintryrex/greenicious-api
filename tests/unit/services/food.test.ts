import { mocked } from 'ts-jest/utils';
import Food from './../../../src/types/food';
import FoodService from './../../../src/services/food';
import FoodModel from '../../../src/models/food';

const foodService = new FoodService();
const item: Food = {
  title: 'Alpro Original Soymilk',
  ingrediens:
    'Water, Hulled SOYA beans (8%), Sugar, Calcium (Calcium carbonate), Acidity regulator (Potassiumphosphates), Flavouring, Sea salt, Stabiliser (Gellan gum), Vitamins (B2, B12, D2), Iodine (Potassium Iodide)',
  stores: ['ICA', 'Lidl'],
  measurement: {
    unit: 'L',
    amount: 1,
  },
};

jest.mock('./../../../src/models/food');
const mockedModel = mocked(FoodModel);

beforeEach(() => {
  mockedModel.mockReset();
});

describe('getAll', () => {
  it('Should return all items', async () => {
    mockedModel.find = jest.fn().mockResolvedValue([item]);
    const allItems = await foodService.getAll();
    expect(allItems).toContain(item);
  });
});

describe('add', () => {
  it.todo('Should fail if the provided data is not of type Food');
  it('Should return the added item', async () => {
    FoodModel.prototype.save = jest.fn().mockResolvedValue(item);
    const result = await foodService.add(item);
    expect(result).toEqual(item);
  });
});

describe('get', () => {
  it('Should return null if no item was found', async () => {
    mockedModel.findById = jest.fn().mockResolvedValue(null);
    const result = await foodService.get('1');
    expect(result).toEqual(null);
  });
  it('Should return the item if it was found', async () => {
    mockedModel.findById = jest.fn().mockResolvedValue(item);
    const result = await foodService.get('1');
    expect(result).toEqual(item);
  });
});

describe('update', () => {
  it.todo('Should fail if the provided data is not of type Food');
  it('Should return null if no item was found', async () => {
    mockedModel.findByIdAndUpdate = jest.fn().mockResolvedValue(null);
    const result = await foodService.update('1', item);
    expect(result).toEqual(null);
  });
  it('Should return the updated item', async () => {
    mockedModel.findByIdAndUpdate = jest.fn().mockResolvedValue(item);
    const result = await foodService.update('1', item);
    expect(result).toEqual(item);
  });
});

describe('delete', () => {
  it('Should return null if no item was found', async () => {
    mockedModel.findByIdAndDelete = jest.fn().mockResolvedValue(null);
    const result = await foodService.delete('1');
    expect(result).toEqual(null);
  });
  it('Should return the deleted item', async () => {
    mockedModel.findByIdAndDelete = jest.fn().mockResolvedValue(item);
    const result = await foodService.delete('1');
    expect(result).toEqual(item);
  });
});
