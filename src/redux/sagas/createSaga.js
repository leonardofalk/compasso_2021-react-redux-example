import { all, call, spawn, delay } from 'redux-saga/effects'

export const createSaga = (...sagas) => function* rootSaga() {
  console.info(sagas)

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);

            break;
          } catch (e) {
            console.error(e);
          }

          yield delay(1000);
        }
      })
    )
  );
}
