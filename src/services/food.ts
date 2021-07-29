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

  async get(id: string) {
    const food = await FoodModel.findById(id);
    return food;
  }

  async update(id: string, data: Food) {
    const food = await FoodModel.findByIdAndUpdate(id, data);
    return food;
  }

  async delete(id: string) {
    const food = await FoodModel.findByIdAndDelete(id);
    return food;
  }
}

export default FoodService;
