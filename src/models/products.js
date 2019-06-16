import * as productsService from '../services/products';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    getList(state, { payload: data }) {
      return data;
    },
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
  effects: {
    /**
     * 获取
     * @param action
     * @param call
     * @param put
     * @returns {IterableIterator<*>}
     */* fetch(action, { call, put }) {
      const { data } = yield call(productsService.fetch);
      console.log(data);
      yield put({ type: 'getList', payload: data });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/products') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
};

