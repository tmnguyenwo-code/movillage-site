import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự').trim(),
  phone: z.string().regex(/^[0-9]{10,11}$/, 'Số điện thoại không hợp lệ'),
  checkIn: z.string().min(1, 'Vui lòng chọn ngày nhận phòng'),
  checkOut: z.string().min(1, 'Vui lòng chọn ngày trả phòng'),
  guests: z.number().int().min(1, 'Số khách phải ít nhất 1').max(20, 'Vui lòng liên hệ trực tiếp cho nhóm trên 20 người'),
  roomPreference: z.string().min(1, 'Vui lòng chọn phòng ưa thích'),
  specialRequests: z.string().optional(),
  language: z.enum(['vi', 'en']).default('vi')
});

export type BookingFormData = z.infer<typeof bookingSchema>;
