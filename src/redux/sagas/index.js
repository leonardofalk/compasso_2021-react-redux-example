import { createSaga } from './createSaga'
import { categorySagas } from './categorySagas'

export default createSaga(
  ...categorySagas(),
)
