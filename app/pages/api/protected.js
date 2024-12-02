
import checkRole from '../../lib/checkRole';

export default checkRole('ADMIN')(async (req, res) => {
  res.status(200).json({ message: 'You are viewing the admin data!' });
});
