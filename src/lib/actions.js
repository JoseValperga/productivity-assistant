import { connectDB, Meeting } from "./db";

export const saveMeeting = async (data) => {
  console.log("data en actions: ", data)
  const {who, when, since, until, about, duration} = data
 
    try {
      await connectDB();
      console.log("Conectado a la base de datos");
        const newMeet = await Meeting.create({
          who,
          when,
          since,
          until,
          about,
          duration,
        });
        return newMeet;
      } catch (error) {
        console.error("Error al crear la reunión:", error);
      }
};
