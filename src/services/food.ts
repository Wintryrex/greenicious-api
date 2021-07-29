import Food from '../types/food';
import FoodModel from '../models/food';

class FoodService {
  async getAll(): Promise<Food[]> {
    const items: Food[] = await FoodModel.find({});
    return items;
  }

  async add(item: Food): Promise<Food> {
    const food = new FoodModel(item);
    const result: Food = await food.save();
    return result;
  }

  async get(id: string) {}
  async update(id: string, item: Food) {}
  async delete(id: string) {}
}

export default FoodService;
