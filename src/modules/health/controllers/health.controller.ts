import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthService } from '@health/services/health.service';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  public constructor(private readonly healthService: HealthService) {}

  @Get('db')
  public checkDbHealth() {
    return this.healthService.checkDbHealth();
  }
}
