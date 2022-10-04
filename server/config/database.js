import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then((con) =>
      console.log(`Database connection sucessfull ${con.connection.host}`)
    );
};

// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
// useFindAndModify: false,
