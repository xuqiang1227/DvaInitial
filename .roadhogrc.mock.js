import { delay } from 'roadhog-api-doc';
import {user} from "./mock/user";

const noProxy = process.env.NO_PROXY === 'true';
const proxy = {
  'POST /api/login/account': (req, res) => {
    const { password, username } = req.body;
    const isOk = password === '888888' && username === 'admin';
    res.send({ status:  isOk ? 'ok' : 'error', type: 'account'});
  },
  'GET /api/user': user
};
export default noProxy ? {} : delay(proxy, 1000);
