import { put, call} from 'redux-saga/effects';
import { setLoading, getItemsSuccess } from './action'
const getItemsApi = () => fetch('https://fakestoreapi.com/products').then(res=>res.json())

export function* getItemsSaga(payload) {
  try {
    yield put(setLoading(true));
    const response = yield call(getItemsApi);
    console.log('============', response)
    yield put(getItemsSuccess(response))
  } catch (error) {
    console.log(error);
  }
} 