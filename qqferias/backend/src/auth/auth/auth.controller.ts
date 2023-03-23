import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() { email, password }) {
    const result = await this.authService.login(email, password);
    if (!result) {
      return { success: false, message: 'Invalid credentials' };
    }
    return { success: true, accessToken: result.accessToken };
  }
}
