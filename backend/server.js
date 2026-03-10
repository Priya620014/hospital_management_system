

// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import Razorpay from 'razorpay';
// import crypto from 'crypto';

// import Doctor from './models/Doctor.js';
// import Appointment from './models/appointmentSchema.js';
// import User from './models/User.js';
// import ServiceBooking from './models/ServiceBooking.js';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Razorpay Initialization
// const razorpay = new Razorpay({
//   key_id: 'rzp_test_eWbSbu5AuEM5Ey', 
//   key_secret: 'tBff6amDLXeNGSEphKN81tfZ',
// });



// // --- PAYMENT ROUTES ---

// // 1. Create Razorpay Order
// app.get('/api/test-server', (req, res) => {
//   res.send("Server is reaching the routes correctly!");
// });
// app.post('/api/create-order', async (req, res) => {
//   try {
//     const options = {
//       amount: req.body.amount * 100, // Amount in paise
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     };
//     const order = await razorpay.orders.create(options);
//     res.json(order); 
//   } catch (err) {
//     console.error("Razorpay Order Error:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // 2. Verify Payment Signature
// app.post('/api/verify-payment', (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
//   // FIXED: Used your actual secret key directly for verification
//   const hmac = crypto.createHmac('sha256', 'tBff6amDLXeNGSEphKN81tfZ');
//   hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
//   const generatedSignature = hmac.digest('hex');

//   if (generatedSignature === razorpay_signature) {
//     res.json({ status: "success" });
//   } else {
//     res.status(400).json({ status: "failure" });
//   }
// });
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch(err => console.log("❌ MongoDB Connection Error:", err));

// // --- DOCTOR & APPOINTMENT ROUTES ---

// app.get('/api/doctors', async (req, res) => {
//   try {
//     const doctors = await Doctor.find(); 
//     res.json(doctors);
//   } catch (err) {
//     res.status(500).json({ error: "Database error" });
//   }
// });

// app.get('/api/doctors/:identifier', async (req, res) => {
//   try {
//     const { identifier } = req.params;
//     let doctor = await Doctor.findOne({ name: { $regex: new RegExp("^" + identifier + "$", "i") } });
//     if (!doctor && mongoose.Types.ObjectId.isValid(identifier)) doctor = await Doctor.findById(identifier);
//     if (!doctor) return res.status(404).json({ message: "Doctor not found" });
//     res.json(doctor);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// app.post('/api/appointments', async (req, res) => {
//   try {
//     const newAppointment = new Appointment(req.body);
//     await newAppointment.save();
//     res.status(201).json({ message: "Appointment saved!" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// app.get('/api/appointments/user/:clerkId', async (req, res) => {
//   try {
//     const appointments = await Appointment.find({ userId: req.params.clerkId });
//     res.json(appointments);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch appointments" });
//   }
// });

// app.put('/api/appointments/:id', async (req, res) => {
//   try {
//     const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ error: "Update failed" });
//   }
// });

// app.delete('/api/appointments/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const appointment = await Appointment.findById(id);
//     if (!appointment) return res.status(404).json({ message: "Not found" });
//     const aptDate = new Date(appointment.appointmentDate);
//     const diffInHours = (aptDate - new Date()) / (1000 * 60 * 60);
//     let fineCharged = diffInHours < 24;
//     await Appointment.findByIdAndDelete(id);
//     res.json({ message: "Cancelled", fineCharged });
//   } catch (err) {
//     res.status(500).json({ error: "Cancellation failed" });
//   }
// });

// // --- SERVICE ROUTES ---

// app.post('/api/services/book', async (req, res) => {
//   try {
//     const newService = new ServiceBooking(req.body);
//     await newService.save();
//     res.status(201).json({ message: "Service booked successfully!" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// app.get('/api/services/user/:clerkId', async (req, res) => {
//   try {
//     const services = await ServiceBooking.find({ userId: req.params.clerkId });
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch services" });
//   }
// });

// app.put('/api/services/:id', async (req, res) => {
//   try {
//     const updated = await ServiceBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ error: "Update failed" });
//   }
// });
// // --- ADMIN DASHBOARD ANALYTICS ---
// app.get('/api/admin/stats', async (req, res) => {
//   try {
//     const totalDoctors = await Doctor.countDocuments();
//     const totalUsers = await User.countDocuments();
//     const totalAppointments = await Appointment.countDocuments();
//     const completedApts = await Appointment.countDocuments({ status: "Completed" });
//     const canceledApts = await Appointment.countDocuments({ status: "Cancelled" });

//     // Calculate total earnings from all appointments
//     const appointments = await Appointment.find({ status: "Confirmed" });
//     const totalEarnings = appointments.length * 1000; // Assuming flat 1000 fee for now

//     res.json({
//       totalDoctors,
//       totalUsers,
//       totalAppointments,
//       totalEarnings,
//       completed: completedApts,
//       canceled: canceledApts
//     });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch admin stats" });
//   }
// });
// // --- server.js ---
// app.get('/api/admin/doctors-list', async (req, res) => {
//   try {
//     const doctors = await Doctor.find();
    
//     // Fetch stats for each doctor from the appointments collection
//     const doctorsWithStats = await Promise.all(doctors.map(async (doc) => {
//       const appointments = await Appointment.find({ doctorName: doc.name });
//       const completedCount = appointments.filter(a => a.status === "Completed").length;
//       const canceledCount = appointments.filter(a => a.status === "Cancelled").length;
      
//       return {
//         ...doc._doc,
//         appointmentsCount: appointments.length,
//         completedCount,
//         canceledCount,
//         totalEarnings: completedCount * (doc.fees || 1000) // Assuming earnings come from completed apts
//       };
//     }));

//     res.json(doctorsWithStats);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch doctors list" });
//   }
// });
// // --- server.js ---
// app.post('/api/admin/add-doctor', async (req, res) => {
//   try {
//     const newDoctor = new Doctor({
//       ...req.body,
//       appointmentsCount: 0,
//       completedCount: 0,
//       canceledCount: 0,
//       totalEarnings: 0
//     });
//     await newDoctor.save();
//     res.status(201).json({ message: "Doctor added successfully!" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to add doctor. Ensure all fields are valid." });
//   }
// });
// // --- server.js ---
// app.get('/api/admin/doctors-list', async (req, res) => {
//   try {
//     const doctors = await Doctor.find(); // Fetches all documents from your doctors collection
//     res.json(doctors);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch doctors from database" });
//   }
// });
// const PORT = 4000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { v2 as cloudinary } from 'cloudinary'; // Added Cloudinary
import fileUpload from 'express-fileupload'; // Added File Upload middleware

import Doctor from './models/Doctor.js';
import Appointment from './models/appointmentSchema.js';
import User from './models/User.js';
import ServiceBooking from './models/ServiceBooking.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- CLOUDINARY CONFIGURATION ---
cloudinary.config({ 
  cloud_name: 'dqljwkiyo', 
  api_key: '618767924698894', 
  api_secret: '3f6RXKXfkowH-cHV9n_PSsvp5Js' 
});

app.use(fileUpload({ useTempFiles: true })); // Required to handle image files

// Razorpay Initialization
const razorpay = new Razorpay({
  key_id: 'rzp_test_eWbSbu5AuEM5Ey', 
  key_secret: 'tBff6amDLXeNGSEphKN81tfZ',
});

// --- PAYMENT ROUTES ---

// 1. Create Razorpay Order
app.get('/api/test-server', (req, res) => {
  res.send("Server is reaching the routes correctly!");
});
app.post('/api/create-order', async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // Amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order); 
  } catch (err) {
    console.error("Razorpay Order Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// 2. Verify Payment Signature
app.post('/api/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  const hmac = crypto.createHmac('sha256', 'tBff6amDLXeNGSEphKN81tfZ');
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generatedSignature = hmac.digest('hex');

  if (generatedSignature === razorpay_signature) {
    res.json({ status: "success" });
  } else {
    res.status(400).json({ status: "failure" });
  }
});
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// --- DOCTOR & APPOINTMENT ROUTES ---

app.get('/api/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find(); 
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

app.get('/api/doctors/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    let doctor = await Doctor.findOne({ name: { $regex: new RegExp("^" + identifier + "$", "i") } });
    if (!doctor && mongoose.Types.ObjectId.isValid(identifier)) doctor = await Doctor.findById(identifier);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post('/api/appointments', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment saved!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/appointments/user/:clerkId', async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.params.clerkId });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});

app.put('/api/appointments/:id', async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

app.delete('/api/appointments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (!appointment) return res.status(404).json({ message: "Not found" });
    const aptDate = new Date(appointment.appointmentDate);
    const diffInHours = (aptDate - new Date()) / (1000 * 60 * 60);
    let fineCharged = diffInHours < 24;
    await Appointment.findByIdAndDelete(id);
    res.json({ message: "Cancelled", fineCharged });
  } catch (err) {
    res.status(500).json({ error: "Cancellation failed" });
  }
});

// --- SERVICE ROUTES ---

app.post('/api/services/book', async (req, res) => {
  try {
    const newService = new ServiceBooking(req.body);
    await newService.save();
    res.status(201).json({ message: "Service booked successfully!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/services/user/:clerkId', async (req, res) => {
  try {
    const services = await ServiceBooking.find({ userId: req.params.clerkId });
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

app.put('/api/services/:id', async (req, res) => {
  try {
    const updated = await ServiceBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

// --- ADMIN DASHBOARD ANALYTICS ---
app.get('/api/admin/stats', async (req, res) => {
  try {
    const totalDoctors = await Doctor.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalAppointments = await Appointment.countDocuments();
    const completedApts = await Appointment.countDocuments({ status: "Completed" });
    const canceledApts = await Appointment.countDocuments({ status: "Cancelled" });

    const appointments = await Appointment.find({ status: "Confirmed" });
    const totalEarnings = appointments.length * 1000; 

    res.json({
      totalDoctors,
      totalUsers,
      totalAppointments,
      totalEarnings,
      completed: completedApts,
      canceled: canceledApts
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch admin stats" });
  }
});

app.get('/api/admin/doctors-list', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    
    const doctorsWithStats = await Promise.all(doctors.map(async (doc) => {
      const appointments = await Appointment.find({ doctorName: doc.name });
      const completedCount = appointments.filter(a => a.status === "Completed").length;
      const canceledCount = appointments.filter(a => a.status === "Cancelled").length;
      
      return {
        ...doc._doc,
        appointmentsCount: appointments.length,
        completedCount,
        canceledCount,
        totalEarnings: completedCount * (doc.fees || 1000) 
      };
    }));

    res.json(doctorsWithStats);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch doctors list" });
  }
});

// --- UPDATED ADD DOCTOR ROUTE ---
app.post('/api/admin/add-doctor', async (req, res) => {
  try {
    let imageUrl = "";

    // Upload to Cloudinary if image exists
    if (req.files && req.files.image) {
      const file = req.files.image;
      const result = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'medicare_doctors',
      });
      imageUrl = result.secure_url;
    }

    const newDoctor = new Doctor({
      ...req.body,
      imageUrl, // Use the Cloudinary URL
      appointmentsCount: 0,
      completedCount: 0,
      canceledCount: 0,
      totalEarnings: 0
    });
    await newDoctor.save();
    res.status(201).json({ message: "Doctor added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add doctor." });
  }
});

app.get('/api/admin/doctors-list', async (req, res) => {
  try {
    const doctors = await Doctor.find(); 
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch doctors from database" });
  }
});
// --- server.js ---
app.get('/api/admin/all-appointments', async (req, res) => {
  try {
    // Fetch all appointments and sort by most recent date
    const appointments = await Appointment.find().sort({ appointmentDate: -1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch all appointments" });
  }
});
// --- server.js ---
app.get('/api/admin/service-stats', async (req, res) => {
  try {
    const services = await Service.find({}) || []; // Fallback to empty array
    const bookings = await ServiceBooking.find({}) || [];

    const totalServices = services.length;
    const totalAppointments = bookings.length;
    
    // Use .reduce safely with a check for empty arrays
    const totalEarning = bookings
      .filter(b => b.status === "Completed")
      .reduce((acc, curr) => acc + (Number(curr.price) || 0), 0);

    const serviceListWithStats = services.map(service => {
      const serviceBookings = bookings.filter(b => b.serviceName === service.name);
      return {
        ...service._doc,
        appointments: serviceBookings.length,
        completed: serviceBookings.filter(b => b.status === "Completed").length,
        canceled: serviceBookings.filter(b => b.status === "Cancelled").length,
        earning: serviceBookings.filter(b => b.status === "Completed")
                                .reduce((acc, curr) => acc + (Number(curr.price) || 0), 0)
      };
    });

    res.json({
      stats: { totalServices, totalAppointments, totalEarning, completed: 0, canceled: 0 },
      serviceList: serviceListWithStats
    });
  } catch (err) {
    console.error("Backend Dashboard Error:", err); // Look at your terminal for the real error!
    res.status(500).json({ error: err.message });
  }
});
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));