const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }


  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch the user associated with the token
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Attach user object to request
    req.user = user;
    next();
  } catch (error) {
   
    res.status(401).json({ message: 'Unauthorized' });
  }
};


       // admin middleware
const adminMiddleware = (req, res, next) => {
  // Ensure req.user is available and check for admin status
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Admin access required' });
  }
};

module.exports = { authMiddleware, adminMiddleware };
