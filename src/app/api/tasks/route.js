import { saveMeeting } from "../../../lib/actions";

export async function POST(request) {
  "use server";
  const data = await request.json();
  console.log("En tasks/route", data);
  try {
    const newData = await saveMeeting(data);
    const response = new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error al guardar la reunión:", error);
  }
}
