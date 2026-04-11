// app/api/contact/route.js
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const text = `
📩 New Portfolio Message

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}
    `.trim();

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );

    const telegramData = await telegramRes.json();

    if (!telegramData.ok) {
      return Response.json(
        { success: false, message: "Failed to send Telegram message" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Telegram contact error:", error);

    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}