import { takeLatest, call, put, delay } from 'redux-saga/effects'
import axios from 'axios'
import { CATEGORY_REQUEST, CATEGORY_SUCCESS, CATEGORY_ERROR } from '../types/categoryTypes'
import { categoryError, categorySuccess } from '../actions/categoryActions'
// import { ApiService } from '../../services'

const api = axios.create({
  baseURL: 'https://compasso-blog-api.herokuapp.com',
  headers: {
    Authorization: 'Bearer 987654321',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

function* onCategoryRequestListener() {
  yield takeLatest(CATEGORY_REQUEST, function*(action) {
    try {
      const response = yield call(api.get, `${action.category.toLowerCase()}/posts`)

      yield put(categorySuccess(response.data))
    } catch (error) {
      yield put(categoryError(error))
    }
  })
}

function* onCategorySuccessListener() {
  yield takeLatest(CATEGORY_SUCCESS, function*() {
    yield delay(5000)

    console.log('SUCESSO')
  })
}

function* onCategoryErrorListener() {
  yield takeLatest(CATEGORY_ERROR, function() {
    console.log('ERROR')
  })
}

export function categorySagas() {
  return [
    onCategoryRequestListener,
    onCategorySuccessListener,
    onCategoryErrorListener
  ]
}
