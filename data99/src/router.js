import React from 'react';
import { Router, Route } from 'dva/router';
import Daowen from './routes/Daowen';
import DaoQu from './routes/DaoQu';
import WenKu from './routes/WenKu';
import SouthRice from './routes/SouthRice';
import DfsdtChart from './routes/DfsdtChart';
import Login from './routes/Login';
import DzjymtjgeChart from './routes/DzjymtjgeChart';
import DzjymdtChart from './routes/DzjymdtChart';
import SdhcdyzrChart from './routes/SdhcdyzrChart';
import McdtChart from './routes/McdtChart';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/dfsdtChart" component={DfsdtChart} />
      <Route path="/dzjymtjgeChart" component={DzjymtjgeChart} />
      <Route path="/dzjymdtChart" component={DzjymdtChart} />
      <Route path="/sdhcdyzrChart" component={SdhcdyzrChart} />
      <Route path="/mcdtChart" component={McdtChart} />
      <Route path="/login" component={Login} />
      <Route path="/daowen" component={Daowen} />
      <Route path="/daoqu" component={DaoQu} />
      <Route path="/wenku" component={WenKu} />
      <Route path="/SouthRice" component={SouthRice} />
    </Router>
  );
}

export default RouterConfig;
