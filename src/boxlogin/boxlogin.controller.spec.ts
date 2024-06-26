import { Test, TestingModule } from '@nestjs/testing';
import { BoxloginController } from './boxlogin.controller';

describe('BoxloginController', () => {
  let controller: BoxloginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoxloginController],
    }).compile();

    controller = module.get<BoxloginController>(BoxloginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
