// lib/checkRole.js
const checkRole = (role) => (req, res, next) => {
    if (!req.session || req.session.user.role !== role) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
  
  export default checkRole;
  