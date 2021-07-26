import Food from '../types/food';

class FoodService {
  async getAll() {}
  async add(item: Food) {}
  async get(id: string | number) {}
  async update(id: string | number, item: Food) {}
  async delete(id: string | number) {}
}

export default FoodService;
