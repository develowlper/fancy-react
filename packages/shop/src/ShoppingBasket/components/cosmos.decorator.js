import React from 'react';

import Store from '../data/store';

const Decorator = ({ children }) => <Store basket={[]}>{children}</Store>;

export default Decorator;
