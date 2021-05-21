import { Model } from './Api';

export interface Weather extends Model {
  externalLastUpdate: string;
  tempC: number;
  tempF: number;
  isDay: number;
  conditionText: string;
  conditionCode: number;
}