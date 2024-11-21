const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
// exports.registerUser = async (req, res) => {




//   const { email, password } = req.body;

//   // console.log(req.body);

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 12);
//     console.log(hashedPassword)
//     const user = new User({ email, password: hashedPassword });
//     await user.save();
 
//     console.log(user)

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.status(201).json({ token });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// Register User
exports.registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;  // Add 'name' and 'username'

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,  // Add 'name'
      username,  // Add 'username'
      email,
      password: hashedPassword,
    });
    
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;


   console.log( process.env.JWT_SECRET);
   
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

