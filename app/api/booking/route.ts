import { NextRequest, NextResponse } from 'next/server';
import { bookingSchema, type BookingFormData } from '@/lib/validations/booking';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = bookingSchema.parse(body);

    const message = formatZaloMessage(validatedData);

    console.log('📋 Booking Request:');
    console.log(message);
    console.log('\n⚠️  To enable Zalo integration:');
    console.log('1. Add ZALO_OA_ACCESS_TOKEN to .env.local');
    console.log('2. Add ZALO_OA_ID to .env.local');
    console.log('3. Uncomment Zalo API call below\n');

    /* Uncomment when credentials are ready:
    const zaloResponse = await fetch('https://openapi.zalo.me/v3.0/oa/message/cs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': process.env.ZALO_OA_ACCESS_TOKEN!,
      },
      body: JSON.stringify({
        recipient: {
          user_id: process.env.ZALO_OA_ID
        },
        message: {
          text: message
        }
      })
    });

    if (!zaloResponse.ok) {
      const error = await zaloResponse.text();
      console.error('Zalo API error:', error);
      throw new Error('Failed to send to Zalo');
    }
    */

    return NextResponse.json({ 
      success: true, 
      message: validatedData.language === 'vi' 
        ? 'Đã gửi yêu cầu đặt phòng thành công. Chúng tôi sẽ liên hệ sớm nhất!' 
        : 'Booking request sent successfully. We will contact you soon!' 
    });

  } catch (error) {
    console.error('Booking API error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Dữ liệu không hợp lệ', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.' },
      { status: 500 }
    );
  }
}

function formatZaloMessage(data: BookingFormData): string {
  const emoji = '🏡';
  const lang = data.language;

  if (lang === 'vi') {
    return `${emoji} YÊU CẦU ĐẶT PHÒNG MỚI

📝 Tên: ${data.name}
📞 Số điện thoại: ${data.phone}
📅 Nhận phòng: ${data.checkIn}
📅 Trả phòng: ${data.checkOut}
👥 Số khách: ${data.guests}
🏠 Phòng ưa thích: ${data.roomPreference}
${data.specialRequests ? `\n💬 Yêu cầu đặc biệt: ${data.specialRequests}` : ''}

⏰ Thời gian: ${new Date().toLocaleString('vi-VN')}`;
  } else {
    return `${emoji} NEW BOOKING REQUEST

📝 Name: ${data.name}
📞 Phone: ${data.phone}
📅 Check-in: ${data.checkIn}
📅 Check-out: ${data.checkOut}
👥 Guests: ${data.guests}
🏠 Room preference: ${data.roomPreference}
${data.specialRequests ? `\n💬 Special requests: ${data.specialRequests}` : ''}

⏰ Time: ${new Date().toLocaleString('en-US')}`;
  }
}
