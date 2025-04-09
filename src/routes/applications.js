import express from 'express';
import { 
  get_all_applications, 
  get_application_by_id, 
  create_application, 
  update_application, 
  delete_application 
} from '../controllers/applications_controller.js';

const router = express.Router();

router.get('/get-all-applications', get_all_applications);
router.get('/:id', get_application_by_id);
router.post('/', create_application);
router.put('/:id', update_application);
router.delete('/:id', delete_application);

export default router;
