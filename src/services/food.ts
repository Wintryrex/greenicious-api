import Food from '../types/food';
import FoodModel from '../models/food';

class FoodService {
  async getAll(): Promise<Food[]> {
    const items: Food[] = await FoodModel.find({});
    return items;
  }

  async add(item: Food) {}
  async get(id: string | number) {}
  async update(id: string | number, item: Food) {}
  async delete(id: string | number) {}
}

export default FoodService;
