import React, { FC } from 'react';
import cn from 'classnames';

import './custom.css';
import s from './App.modules.scss';

const App: FC = () => {
  return (
    <div className={cn(s.header, 'color')}>
      Yes, we did it! This is App Components!
    </div>
  )
}

export default App;