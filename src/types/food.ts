interface Measurement {
  unit: string;
  amount: number;
}

interface Food {
  _id?: string;
  title: string;
  ingrediens: string;
  stores: string[];
  measurement: Measurement;
}

export default Food;
