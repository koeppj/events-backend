import { Test, TestingModule } from '@nestjs/testing';
import { BoxloginService } from './boxlogin.service';

describe('BoxloginService', () => {
  let service: BoxloginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoxloginService],
    }).compile();

    service = module.get<BoxloginService>(BoxloginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
