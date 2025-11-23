import React, { useState } from 'react';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

// 1. Define the validation schema using Zod
const loginSchema = z.object({
  email: z.string().min(1, 'البريد الإلكتروني مطلوب').email('عنوان بريد إلكتروني غير صالح'),
  password: z.string().min(6, 'يجب أن تكون كلمة المرور 6 أحرف على الأقل'),
});

const Login = () => {
  // 2. Manage form state and errors manually
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 3. Create a validation function
  const validateForm = () => {
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const newErrors = {};
      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0]] = issue.message;
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  // 4. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the specific field on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // 5. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    setIsLoading(true);
    try {
      // Simulate API call
      console.log('Logging in with:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
      alert('تم تسجيل الدخول بنجاح!');
      // Handle successful login (e.g., redirect, set auth token)
    } catch (error) {
      console.error('Login failed:', error);
      alert('فشل تسجيل الدخول. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div dir="rtl" lang="ar" className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg py-8">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">مرحبا بك</CardTitle>
          <CardDescription>
            أدخل بيانات الاعتماد الخاصة بك للوصول إلى حسابك
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                className="text-right"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  aria-invalid={!!errors.password}
                  className="text-right"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute left-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full text-white rounded-md py-3 text-lg"
              style={{ backgroundColor: '#4B5C47' }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  جاري تسجيل الدخول...
                </>
              ) : (
                'تأكيد'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;