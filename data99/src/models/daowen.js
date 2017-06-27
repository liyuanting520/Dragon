import { daowenquery } from '../services/daowen';
export default {

  namespace: 'daowen',

  state: {

  },

   subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
         
      });
    },
   },
  effects: {
    *daowenquery({ payload }, { select, call, put }) {
      const { data, headers } = yield call(daowenquery, { payload }); 
      if(data){
        console.log(data);
      }
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
