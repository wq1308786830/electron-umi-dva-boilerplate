import React from 'react';
import withRouter from 'umi/withRouter';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default withRouter(
  ({ location, children }) =>
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={200}>
        {children}
      </CSSTransition>
    </TransitionGroup>,
);
