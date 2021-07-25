interface Measurement {
  unit: 'g' | 'L';
  amount: number;
}

interface Food {
  title: string;
  ingrediens: string;
  stores: string[];
  measurement: Measurement;
}

export default Food;
