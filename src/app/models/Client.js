import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  budget: String,
  pictures: [
    {
      url: String,
    },
  ],
  age: Number,
  name: {
    first: String,
    last: String,
  },
  company: String,
  email: String,
  phone: String,
  address: String,
  about: String,
  registered: Date,
  latitude: Number,
  longitude: Number,
  contactTimeline: [
    {
      id: Number,
      broker: String,
      date: Date,
    },
  ],
  channel: String,
});

export default mongoose.model('Client', ClientSchema);
