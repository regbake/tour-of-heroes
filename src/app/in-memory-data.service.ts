import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Mr. Taco'},
      { id: 42, name: 'Miss. Taco'},
      { id: 13, name: 'Banana Hammock'},
      { id: 2, name: 'Sailer Jherry'},
      { id: 23, name: 'which one is pink'},
      { id: 5, name: 'Heidi'},
      { id: 4, name: 'surpressed laughter'}
    ];

    return { heroes };
  }
}
