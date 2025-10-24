import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { PokemonService } from './services/pokemon.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PokemonService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a pokemon list', () => {
      expect(appController.getAll()).not.toBe(null);
    });
  });
});
